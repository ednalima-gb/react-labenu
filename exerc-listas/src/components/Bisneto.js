import React from "react";
import styled from "styled-components";

const ComponentBisneto = styled.div`
    background-color: orange;
`;

export function Bisneto (props) {



    return (
    <ComponentBisneto>
        <p>Bisneto</p>
        <p>Botão do componente bisneto: </p>
        <p>Clique aqui para atualizar o estado do pai </p>
        <button onClick={props.atualizarEstado}>Atualizar estado</button>
    </ComponentBisneto>
    )
    
}