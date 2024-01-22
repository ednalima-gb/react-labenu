import React, {useState} from "react";

export function ListaDeArray() {
    const [listaDeFrutas, setListaDeFrutas] = useState(['batata', 'maçã', 'laranja' ])

    const listaInicial = listaDeFrutas.map((fruta, index) => {
        return <p>{index} - {fruta}</p>
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


    return(
        <div>
            <li>Lista de Frutas do início: {listaInicial}</li>
           <li>Adiciona Fruta pelo caminho 1: {adicionaFruta1}</li>
           <li>Adiciona Fruta pelo caminho 2: {adicionaFruta2}</li>
           <li>Adiciona Fruta pelo caminho 3: {adicionaFruta3}</li>
        </div>
    )
}