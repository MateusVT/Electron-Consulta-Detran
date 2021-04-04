import React, { useContext, useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Button, ButtonGroup, Label } from "reactstrap";
import { Context } from '../ComponentContext';

const Menu = () => {

    const history = useHistory();
    const context = useContext(Context)

    //ComponentDidMount()
    useEffect(() => {
    }, []);

    return (<>
        <Button outline size="sm" style={{ margin: "5px" }} onClick={() => { history.push("*") }}>Sair</Button>
        <div className="centerHV">
            <Label style={{ fontSize: "18px" }}>{`Seja Bem-Vindo ${context.user?.name}`}</Label>
            <Label style={{ fontSize: "18px" }}>{`${context.user?.name}`}</Label>
            <br />
            <ButtonGroup vertical >
                <Button size="lg" block color="primary" onClick={() => { history.push("/runner") }} >Executar</Button>
                <span style={{ height: "10px" }}></span>
                <Button size="lg" color="primary" onClick={() => { history.push("/client-crud") }} >Cadastrar Clientes</Button>
                <span style={{ height: "10px" }}></span>
                <Button size="lg" color="primary" onClick={() => { history.push("/client-manager") }} >Gerenciar Clientes</Button>
                <span style={{ height: "10px" }}></span>
            </ButtonGroup>
        </div>
    </>
    );
};



export default withRouter(Menu);
