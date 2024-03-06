import React from "react";
import styles from 'styled-components';


const Stylemessage = styles.div`
  display: flex;
  height: 90vh;
  align-items: end;

  ;
`

export function Message ({ user, message }){
  if(user === '' || message === ''){
    return (
      <Stylemessage></Stylemessage>
    )
  }else{
    return (
    <Stylemessage>{`${user} : ${message}`}</Stylemessage>
  )
  }
  
}