import React, { useContext, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import {
    Button, Col, Container, Form,
    FormGroup, Input, Label
} from 'reactstrap';
import { sendRequestByIPC } from '../../main/ipcConnector';
import { Context } from '../ComponentContext';
import './Login.scss';

const Login = () => {

    const context = useContext(Context)
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await sendRequestByIPC("find-user", { email: email, password: password }).then(user => {
            if (user != null) {
                context.user = user
                history.push("/menu")
            }
        })
    };

    return (
        <>
            <Container className="App">
                <h2>Acesso</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="seuemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="password">Senha</Label>
                            <Input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        <Button style={{ width: "100px" }} color="primary" disabled={email == "" || password == ""} onClick={handleLogin}>Login</Button>
                    </Col>
                </Form>
            </Container>
        </>
    );

}

export default withRouter(Login);

