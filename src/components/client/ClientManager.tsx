import {
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Collapse,
    ListItemIcon

} from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Label, Progress, Row } from 'reactstrap';
import { sendRequestByIPC } from '../../main/ipcConnector';
import { Client, DetranInfos } from '../../types/Types';
import { Context } from '../ComponentContext';
import InfosCollapser from "./InfosCollapser";
import { loadAbsoluteMoment, loadMoment, now, nowLocale } from "../../utils/Moment";

const ClientManager = () => {

    const context = useContext(Context)
    const history = useHistory();

    const [clients, setClients] = useState<Client[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        void async function fetchData() {
            const clients: Client[] = await sendRequestByIPC("find-clients", { user_id: context.user?._id }).then((clients: Client[]) => {
                return clients
            })
            const clientCnhInfos: DetranInfos[] = await sendRequestByIPC("find-cnh-infos", { user_id: context.user?._id }).then((cnhInfos: DetranInfos[]) => {
                return cnhInfos
            })

            clientCnhInfos.forEach(cnhInfos => {
                const client = clients.find(client => client._id == cnhInfos.client_id)
                if (client) {
                    client.detranInfos = cnhInfos
                }
            })

            setClients(clients)
            setLoading(false)
        }();
    }, []);


    const handleDeleteClient = async (deletedClient: Client) => {
        setLoading(true)
        await sendRequestByIPC("delete-client", { client_id: deletedClient._id }).then(() => {
            setClients(clients.filter(client => client._id != deletedClient._id))
            setLoading(false)
        })
    }

    const handleInfoIcon = (client: Client) => {
        const infractions = client.detranInfos?.infractions
        if (infractions && infractions?.length > 0) {
            const dates: number[] = infractions.map(infraction => {
                return Math.ceil(loadMoment(infraction.infraction_deadline, "DD/MM/YYYY").diff(nowLocale(), "days", true))
            }).filter(number => number > 0)

            if (dates.length > 0) {
                const closestDate = Math.min(...dates)
                if (closestDate >= 10) {
                    return <ErrorIcon style={{ color: "green", marginLeft: "5px" }} />
                }
                else if (closestDate >= 4 && closestDate <= 9) {
                    return <WarningIcon style={{ color: "orange", marginLeft: "5px" }} />
                }
                else if (closestDate >= 0 && closestDate <= 3) {
                    return <ErrorIcon style={{ color: "red", marginLeft: "5px" }} />
                }
            }
        }
    }

    return (<>
        <Button outline size="sm" style={{ margin: "5px" }} onClick={() => { history.push("/menu") }}>Voltar</Button>
        <div style={{ textAlign: "center" }}>
            <Label style={{ fontSize: "20px", fontWeight: "bold" }} >Clientes Cadastrados</Label>
        </div>
        <div style={{ textAlign: "center", overflow: "auto", maxHeight: "470px" }}>
            <Container style={{ padding: "0px 20px 20px 20px", width: "100%" }} >
                {!loading && <List style={{ width: "100%" }} dense={true}>
                    {clients.map((client, index) =>
                        <ListItem style={{ borderBottom: "solid 1px #b4b4b48f" }} key={client._id}>
                            <ListItemText
                                style={{ fontWeight: "bold" }}
                                primary={<div>
                                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>{(index + 1) + " - " + client.name}</span>
                                    {handleInfoIcon(client)}
                                </div>}
                                primaryTypographyProps={{ component: "div", style: { fontWeight: "bold" } }}
                                secondaryTypographyProps={{ component: "div" }}
                                secondary={
                                    <div style={{ display: "flex" }}>
                                        <div style={{ display: "flex", width: "75%" }}>
                                            <InfosCollapser client={client} />
                                        </div >
                                        <div style={{ width: "25%", textAlign: "right" }} >
                                            <Button size="sm" style={{ width: "150px", maxHeight: "40px", backgroundColor: "red", marginTop: "5px" }}
                                                onClick={() => { handleDeleteClient(client) }} >{"Deletar Cliente"}</Button>
                                        </div >
                                    </div >
                                }
                            />
                        </ListItem>
                    )}

                </List>}
                {!loading && clients.length == 0 && <Row>
                    <Col style={{ textAlign: "center" }}>
                        {<Label>Nenhum cliente cadastrado!</Label>}
                    </Col>
                </Row>}
                {loading && <Row>
                    <Col style={{ textAlign: "center" }}>
                        <Progress bar animated color="success" value="100">Carregando Clientes...</Progress>
                    </Col>
                </Row>}
            </Container>
        </div>
    </>
    );
};

export default ClientManager;
