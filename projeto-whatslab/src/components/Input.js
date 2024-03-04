
import { useState } from 'react';
import styled from 'styled-components';

const Styleinput = styled.div`
background-color: pink;
display: flex;

`

export function Input (){

  const [inputUser, setInputUser] = useState('valor inicial')
  const [inputMessage, setInputMessage] = useState('')

   const handleInputUser = (event) => {
    const res = event.target.value
    setInputUser(res)
  }

  const handleInputMessage = (event) => {
    setInputMessage(event.target.value)
  }

  const showMessage = () => {
    const resUser = inputUser
    const resMessage = inputMessage
   
    console.log(resUser, ': ', resMessage)
    
  }
 
  return (
     
      <Styleinput>
        <input placeholder= "usuário" value={inputUser} onChange={handleInputUser} />
        <input placeholder= "mensagem" value={inputMessage} onChange={handleInputMessage} />
        <button onClick={showMessage}>Enviar</button>
      </Styleinput>    
  )
}