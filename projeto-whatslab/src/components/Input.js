import React, { useState } from 'react';
import styled from 'styled-components';

const Styleinput = styled.div`
display: flex;
width: 100%;

input {
  width: 100%;
}

`

export function Input ({onSendMessage}){ 
  const [inputUser, setInputUser] = useState('')
  const [inputMessage, setInputMessage] = useState('')

   const handleInputUser = (event) => {
    const res = event.target.value
    setInputUser(res)
  }

  const handleInputMessage = (event) => {
    setInputMessage(event.target.value)
  }

  const handleSendMessage = () => {
    onSendMessage(inputUser, inputMessage)
  }

  return (
     
      <Styleinput>
        <input placeholder= "usuário" value={inputUser} onChange={handleInputUser} />
        <input placeholder= "mensagem" value={inputMessage} onChange={handleInputMessage} />
        <button onClick={handleSendMessage}>Enviar</button>
      </Styleinput>    
  )
}