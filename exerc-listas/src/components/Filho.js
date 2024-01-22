import React from "react";
import { Neto } from "./Neto";
import styled from "styled-components";

const ComponentFilho = styled.div`
    background-color: lightgreen;
`;

export function Filho (props) {
    
    return (
        <ComponentFilho>
            <p>Filho</p>
            <Neto atualizarEstado = {props.atualizarEstado} />
        </ComponentFilho>
    )
}