import React, {useState} from "react";
import styled from "styled-components";

const ComponentListaDeArray = styled.div`
    border: 2px solid black;
    width: 45%;
`

export function ListaDeArray() {
    const [listaDeFrutas, setListaDeFrutas] = useState(['batata', 'maçã', 'laranja' ])

    const listaInicial = listaDeFrutas.map((fruta, index) => {
        return <p key={index} >{index} - {fruta}</p>
    })

    const adicionaFruta1 = () => {
        const novasFrutas = [...listaDeFrutas]
        novasFrutas.push('abacate')
        setListaDeFrutas(novasFrutas)
    };


    const adicionaFruta2 = () => {
        const novasFrutas = [...listaDeFrutas, 'abacate']
        setListaDeFrutas(novasFrutas)
    }

    const adicionaFruta3 = () => {
        setListaDeFrutas([...listaDeFrutas, 'abacate'])
    }

    const alterarFruta = () => {
        const novasFrutas = [...listaDeFrutas]
        novasFrutas[0] = 'banana'
        setListaDeFrutas(novasFrutas)
        
    }

   const removeFruta1 = () => {
    const frutaFiltrada = listaDeFrutas.filter((fruta) => {
        return fruta !== 'batata'
    })

    setListaDeFrutas(frutaFiltrada)
   }

   const removeFruta2 = () => {
    const indiceFruta = listaDeFrutas.findIndex((fruta) => {
        return fruta === 'batata'
    })
    const novaLista = [...listaDeFrutas]
    novaLista.splice(indiceFruta, 1)
    setListaDeFrutas(novaLista)
   }

   

    return(
        <ComponentListaDeArray>
            <li>Lista de Frutas do início: {listaInicial}</li>
            <p>Adicionando itens a lista:</p>
           <button onClick={adicionaFruta1}>Adiciona frutas 1</button>
           <button onClick={adicionaFruta2}>Adiciona frutas 2</button>
           <button onClick={adicionaFruta3}>Adiciona frutas 3</button>
           <p>Alterando itens da lista: </p>
           <button onClick={alterarFruta}>Altera fruta</button>
           <p>Removendo itens da lista: </p>
           <button onClick={removeFruta1}>Removendo batata</button>
           <button onClick={removeFruta2}>Removendo primeira fruta</button>
          
        </ComponentListaDeArray>
    )
}