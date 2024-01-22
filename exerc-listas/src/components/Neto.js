import React from "react";
import { Bisneto } from "./Bisneto";
import styled from "styled-components";

const ComponentNeto = styled.div`
    background-color: pink;
`;

export function Neto (props) {
    return (
    <ComponentNeto>
        <p>Neto</p>
        <Bisneto atualizarEstado = {props.atualizarEstado}/>
    </ComponentNeto>  
    )
   
}