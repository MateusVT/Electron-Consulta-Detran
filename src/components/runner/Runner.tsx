import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Col, Container, Input, Label, Media, Row, Spinner } from "reactstrap";
import { sendRequestByIPC } from '../../main/ipcConnector';
import { Client, DetranInfos, Infraction } from '../../types/Types';
import { nowLocale } from '../../utils/Moment';
import { Context } from '../ComponentContext';


const Runner = () => {

    const context = useContext(Context)
    const history = useHistory();
    const captchaRef = useRef<HTMLInputElement>(null);


    const [captcha, setCaptcha] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [captchaCookie, setCaptchaCookie] = useState("");
    const [clients, setClients] = useState<Client[]>([]);
    const [counter, setCounter] = useState(0);
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        void async function fetchData() {
            await sendRequestByIPC("find-clients", { user_id: context.user?._id }).then((clients: Client[]) => {
                setClients(clients)
            })
        }();
        generateCaptcha()

    }, []);

    useEffect(() => {
        captchaRef.current?.focus()
    })

    const generateCaptcha = async () => {
        await sendRequestByIPC("captcha").then(response => {
            const base = `data:image/jpeg;base64,${new Buffer(response.data, 'binary').toString('base64')}`
            setImageURL(base)
            setCaptchaCookie(response.cookie)
        })
    };

    const doLogin = async () => {
        return await sendRequestByIPC("login", { captcha: captcha, cookies: captchaCookie, client: clients[counter] }).then(response => {
            if (response.data.includes("Nome:")) {
                const dom: string = response.data
                const doc = new DOMParser().parseFromString(dom, "text/html");
                const cnhStatus = doc.querySelectorAll("#extrato_condutor_situacaocnh")
                const cnhData: DetranInfos = {
                    user_id: context.user!._id!,
                    client_id: clients[counter]._id!,
                    cnhSituation: cnhStatus[0].children[1].innerHTML,
                    cnhOversight: cnhStatus[1].children[1].children[0].innerHTML,
                    updatedAt: nowLocale().format("L [às] LT"),
                    infractions: []
                }

                const qtyInfractions = doc.querySelectorAll('div[id*="modal-suspensoes-infracoes_"]').length

                const infractionsDOMTitles = Array.from(doc.getElementById("content-suspensoes")?.querySelector('#table-expandable')?.children[0].querySelectorAll("tr:not(.expanded-row)") || [])
                infractionsDOMTitles.shift()

                const infractionsDOMInfos = Array.from(doc.getElementById("content-suspensoes")?.querySelector('#table-expandable')?.children[0].querySelectorAll(".expanded-row") || [])

                if (infractionsDOMTitles) {

                    for (let i = 0; i < qtyInfractions; i++) {
                        const infraction_id = infractionsDOMTitles[i].getElementsByClassName("hue")[0].textContent?.trim() || "";
                        const infraction_situation = infractionsDOMTitles[i].getElementsByClassName("text-right")[0].textContent || "";
                        const create_at = infractionsDOMInfos[i].querySelectorAll("fieldset")[0].children[1].children[1].textContent || ""
                        const infraction_deadline = infractionsDOMInfos[i].querySelectorAll("fieldset")[0].children[7].children[1].textContent || ""
                        cnhData.infractions.push({ infraction_id: infraction_id, infraction_situation: infraction_situation, create_at: create_at, infraction_deadline: infraction_deadline })
                    }
                }
                return cnhData
            } else {
                return null
            }
        })
    };

    const saveCnhInfos = async (cnhInfos: DetranInfos) => {
        await sendRequestByIPC("save-cnh-infos", cnhInfos).then(() => {
            handleCounterForward()
        })
    };

    const handleCounterForward = () => {
        if (counter == clients.length - 1) {
            setCounter(0)
        } else {
            setCounter(counter + 1)
        }
    }

    const handleCounterBackward = () => {
        if (counter == 0) {
            setCounter(clients.length - 1)
        } else {
            setCounter(counter - 1)
        }
    }

    const handleExecute = async () => {
        setProcessing(true)
        const cnhData: DetranInfos | null = await doLogin()
        if (!cnhData) {
            setCaptcha("")
            await generateCaptcha()
        }
        else {
            saveCnhInfos(cnhData)
            setCaptcha("")
            await generateCaptcha()
        }
        setProcessing(false)
    };

    const buttonStatus = () => {
        switch (counter) {
            case 0:
                return "Iniciar"
            case clients.length - 1:
                return "Encerrar"
            default:
                return "Próximo"
        }
    }


    const keyUpHandler = (key: any) => {
        if (key.keyCode == 13) {
            handleExecute()
        }
    }

    return (
        <>

            <Button outline size="sm" style={{ margin: "5px" }} onClick={() => { history.push("/menu") }}>Voltar</Button>
            <Container style={{ padding: "50px", width: "100%", height: "100%", textAlign: "center" }} key="captcha" >
                {clients.length > 0 && <>
                    <Row>
                        <Col>
                            <Label>{`Progresso: ${counter + 1}/${clients.length}`}</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Label>{`Cliente: ${clients[counter].name}`}</Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonGroup vertical>
                                <div style={{ width: "100%" }}>
                                    <Media style={{ minWidth: "128px" }} object src={imageURL} />
                                </div>
                                <span style={{ height: "10px" }}></span>
                                <Input name="captcha" id="captcha"
                                    onKeyUp={keyUpHandler}
                                    autoFocus
                                    innerRef={captchaRef}
                                    disabled={processing}
                                    value={captcha}
                                    onChange={(e) => { setCaptcha(e.target.value) }}
                                    placeholder="Insira o captcha" />

                                <span style={{ height: "10px" }}></span>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    {processing &&
                        <Row>
                            <Col>
                                Processando <Spinner size="sm" color="primary" />
                            </Col>
                        </Row>}
                    <br />
                    <Row>
                        <Col>
                            <Button size="sm" type="submit" color="primary" onKeyUp={keyUpHandler} disabled={processing} onClick={handleExecute} >{buttonStatus()}</Button>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Button size="sm" color="danger" disabled={processing} style={{ marginRight:"20px"}} onClick={handleCounterBackward} >{"<- Retornar"}</Button>
                            <Button size="sm" color="danger" disabled={processing} onClick={handleCounterForward} >{"Avançar ->"}</Button>
                        </Col>
                    </Row>
                </>
                }
                {clients.length == 0 && <Row>
                    <Col xs={12} style={{ textAlign: "center" }}>
                        <Label>Nenhum cliente cadastrado!</Label>
                    </Col>
                </Row>}
            </Container>


        </>
    );
};

export default Runner

function useFocus(): [any, any] {
    throw new Error('Function not implemented.');
}
