import React, {useState} from 'react';

export function Contador (props) {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1)
    }


    return (
        <div>
            <input value={contador}/>
            <button onClick={incrementar} >{props.button}</button>

            {/* <h2>{contador}</h2>
            <button onClick={incrementar} >{props.button}</button> */}
        </div>
    )
}