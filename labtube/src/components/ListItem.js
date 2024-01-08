import React from 'react';

export function ListItem (props) {
    return (
        <ul>
        <li className="botoes-meunu-vertical">{props.name1}</li>
        <li className="botoes-meunu-vertical">{props.name2}</li>
        <li className="botoes-meunu-vertical">{props.name3}</li>

        <li className="botoes-meunu-vertical">{props.name4}</li>
        <li className="botoes-meunu-vertical">{props.name5}</li>
        
    </ul>
    )
}

