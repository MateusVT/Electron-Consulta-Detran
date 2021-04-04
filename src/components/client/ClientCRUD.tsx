import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { now } from 'jquery';
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Alert, Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, Row, Toast, ToastBody, ToastHeader } from "reactstrap";
import { sendRequestByIPC } from '../../main/ipcConnector';
import { Client } from '../../types/Types';
import { loadAbsoluteMoment, loadMoment, nowLocale } from '../../utils/Moment';
import { Context } from '../ComponentContext';

const ClientCRUD = () => {

    const history = useHistory();
    const context = useContext(Context)

    const [client, setClient] = useState<Partial<Client>>({ tipoCnh: "2", validadeCnh: nowLocale().format("L") })


    const handleSubmit = async () => {

        await sendRequestByIPC("new-client", { ...client, user_id: context.user!!._id!!, active: true }).then(() => {
            setClient({ name: "", cpf: "", cnh: "", tipoCnh: "2", validadeCnh: nowLocale().format("L") })
            // history.push("/menu")
        })

    };

    return (
        <>
            <Button outline size="sm" style={{ margin: "5px" }} onClick={() => { history.push("/menu") }}>Voltar</Button>
            <div style={{ textAlign: "center" }}>
                <Label style={{ fontSize: "20px", fontWeight: "bold" }} >Cadastro de Clientes</Label>
            </div>
            <Container style={{ padding: "0px 50px 50px 50px" }} >
                <Form >
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="name">Nome</Label>
                                <Input type="text" value={client?.name} onChange={(e) => { setClient({ ...client, name: e.target.value }) }} name="name" id="name" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="idcnh">Nº Registro CNH</Label>
                                <Input type="text" value={client?.cnh} onChange={(e) => { setClient({ ...client, cnh: e.target.value }) }} name="idcnh" id="idcnh" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={{ height: "70px" }}>
                        <FormControl style={{ width: "100%", textAlign: "center" }} component="fieldset">
                            <FormLabel component="legend">Modelo</FormLabel>
                            <RadioGroup aria-label="model" name="model" value={client?.tipoCnh} onChange={(e) => { setClient({ ...client, tipoCnh: e.target.value }) }}>
                                <Row>
                                    <Col xs="6">
                                        <FormControlLabel value="1" control={<Radio color="primary" />} label="Sem Foto" />
                                    </Col>
                                    <Col xs="6">
                                        <FormControlLabel value="2" control={<Radio color="primary" />} label="Com Foto" />
                                    </Col>
                                </Row>

                            </RadioGroup>
                        </FormControl>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="cpf">CPF</Label>
                                <Input type="text" value={client?.cpf} onChange={(e) => { setClient({ ...client, cpf: e.target.value }) }} name="cpf" id="cpf" />
                            </FormGroup>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="cnhdate">Validade CNH</Label>
                                <Input type="text" placeholder="dd/mm/aaaa" name="cnhdate" value={client?.validadeCnh} onChange={(e) => { setClient({ ...client, validadeCnh: e.target.value }) }} id="cnhdate" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row style={{ width: "100%", textAlign: "center" }}>
                        <Col>
                            <Button color="primary" disabled={client.name == "" || client.cpf == "" || client.cnh == ""} onClick={handleSubmit}>Cadastrar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    );
};


export default ClientCRUD;
