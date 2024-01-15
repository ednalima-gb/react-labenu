import React, {useState} from 'react';

export function Inputs (props) {

    const [value, setValue] = useState('');

    const handleNome = (event) => {
        setValue(event.target.value)
    }
    
    return( 
            <div>
                <label>{props.title}: </label>
                <input onChange={handleNome} value = {value}/>
            </div>
                        
    )
}