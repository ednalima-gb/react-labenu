import React, {useState} from 'react';

export function Inputs(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleInputName = (event) => {
        setName(event.target.value)
        }

    return (
        <div>
            <div>
                <input value={name} onChange={handleInputName}/>
                <button>{props.title1}</button>
            </div>

            <div>
                <input value={email} />
                <button>{props.title2}</button>
            </div>
            
        </div>
    )
}