import React from "react";
import styled from "styled-components";

const ComponentArray = styled.p`
    border: 1px solid black;
    width: 15%;
`;

const ComponenteSpam = styled.span`
    visibility: hidden;
`;

const listaDeDados = [
    {
        "nome": "Caio",
        "idade" : 26
    },
    {
        "nome": "Chijo",
        "idade" : 27
    },
    {
        "nome" : "Lais",
        "idade" : 28
    },
    {
        "nome" : "Mandi",
        "idade" : 29
    }
]

const listaDeComponentes = listaDeDados.map((dado) => {
    return <ComponentArray>{dado.nome} <ComponenteSpam>-----------------</ComponenteSpam> {dado.idade}</ComponentArray>
})

// const listaDeComponentes = listaDeDados.map((dado) => {
//     return <p>{dado.nome} - {dado.idade}</p>
// })

export function Array() {
    return(
        <div>
            <ul>
                {listaDeComponentes}
            </ul>

        </div>
    )
}