import {
    Collapse, IconButton, ListItem, ListItemText
} from "@material-ui/core";
import Add from '@material-ui/icons/AddBox';
import Minus from '@material-ui/icons/IndeterminateCheckBox';
import React, { useEffect, useState } from 'react';
import { Button, Label } from "reactstrap";
import { Client } from "../../types/Types";
import { loadAbsoluteMoment, loadMoment, now, nowLocale } from "../../utils/Moment";

const InfosCollapser = ({ client }: { client: Client }) => {
    const [openInfos, setOpenInfos] = useState(false)
    const [openInfractions, setOpenInfractions] = useState(false)

    const handleClickOpenInfos = () => {
        setOpenInfos(!openInfos)
        setOpenInfractions(false)
    }

    const handleClickOpenInfractions = () => {
        setOpenInfractions(!openInfractions)
        setOpenInfos(false)
    }

    const handleDateColor = (date: string) => {
        const dateDiffFromNow = Math.ceil(loadMoment(date, "DD/MM/YYYY").diff(nowLocale(), "days", true))
        console.log(date)
        console.log(dateDiffFromNow)
        if (dateDiffFromNow > 10) {
            return "green"
        }
        else if (dateDiffFromNow >= 4 && dateDiffFromNow <= 9) {
            return "yellow"
        }
        else if (dateDiffFromNow >= 0 && dateDiffFromNow <= 3) {
            return "red"
        }

        return "black"
    }

    const handleDateTextStrike = (date: string) => {
        let isDateExpired = loadAbsoluteMoment(date, "DD/MM/YYYY").isAfter(now())

        if (isDateExpired) {
            return ""
        }
        else {
            return "line-through"
        }

    }


    return (
        <div style={{ marginTop: "5px" }}>

            <Button size="sm" style={{ width: "150px", marginRight: "5px" }} disabled={client.detranInfos == undefined} onClick={handleClickOpenInfos} color="primary">{openInfos ? "Ocultar Informações" : "Exibir Informações"}</Button>
            <Button size="sm" style={{ width: "150px", marginLeft: "5px" }} disabled={client.detranInfos == undefined || (client.detranInfos.infractions == undefined || client.detranInfos.infractions.length == 0)} onClick={handleClickOpenInfractions} color="primary">{openInfractions ? "Ocultar Infrações" : "Exibir Infrações"}</Button>

            <Collapse in={openInfos} timeout="auto" style={{ marginTop: "4px" }} key={"infoCollapser"} unmountOnExit>
                <span>
                    <b>Última Atualização: </b>
                    {client.detranInfos?.updatedAt || "Não Registrado"}
                </span>

                <br />

                <span style={{ marginRight: "10px" }}>
                    <b>CPF: </b>
                    {client.cpf}
                </span>

                <span>
                    <b>Status: </b>
                    {client.active ? "Ativo" : "Inativo"}
                </span>

                <br />

                <span style={{ marginRight: "10px" }}>
                    <b>Situação: </b>
                    {client.detranInfos?.cnhSituation || "Não Registrado"}
                </span>

                <span style={{ maxWidth: "50%" }}>
                    <b>Fiscalização: </b>
                    {client.detranInfos?.cnhOversight || "Não Registrado"}
                </span>

                <br />
            </Collapse>

            <Collapse in={openInfractions} timeout="auto" style={{ marginTop: "4px" }} key={"infractionCollapser"} unmountOnExit>
                {client.detranInfos && client.detranInfos.infractions && client.detranInfos && client.detranInfos.infractions.length > 0 ? <div>
                    {client.detranInfos.infractions.map(infraction => {
                        return <div style={{ marginBottom: "10px", color: "black" }} key={infraction.infraction_id}>
                            <span style={{ fontWeight: "bold" }}>{infraction.infraction_id}</span>
                            <br />
                            <span>
                                <b>Situação: </b>
                                {infraction.infraction_situation || "Não Registrado"}
                            </span>
                            <br />
                            <span style={{ marginRight: "10px" }}>
                                <b>Data Geração: </b>
                                {infraction.create_at || "Não Registrado"}
                            </span>
                            <span style={{ marginRight: "10px", textDecoration: handleDateTextStrike(infraction.infraction_deadline), color: handleDateColor(infraction.infraction_deadline) }}>
                                <b>Data Máxima Defesa: </b>
                                {infraction.infraction_deadline || "Não Registrado"}
                            </span>
                        </div>
                    })}

                </div> : <div />}
            </Collapse>
        </div>
    );
};


export default InfosCollapser;
