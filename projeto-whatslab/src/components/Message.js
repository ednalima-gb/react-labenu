import React from "react";
import styles from 'styled-components';


const Stylemessage = styles.div`
  background-color: blue;
  width: 100%
  
`

export function Message (){
  return (
    <Stylemessage>TESTE</Stylemessage>
  )
}