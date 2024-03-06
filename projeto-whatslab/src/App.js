import { useState } from 'react';
import { Input } from './components/Input';
import { Message } from './components/Message';
import styled from 'styled-components';

const StylePage = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
 
`
const StyleGeral = styled.div`
  display: flex;
 justify-content: center;
 
`

function App() {
  const [messageData, setMessageData] = useState(
    {user: '', 
    message: ''
  })

  const handleSendMessage = (user, message) => {
    setMessageData({user, message})
  }
  
  return (
    <StyleGeral className="App">
      <StylePage>
        <Message user = {messageData.user} message = {messageData.message}></Message>
        <Input 
        onSendMessage={handleSendMessage}
        ></Input>
      </StylePage>
    </StyleGeral>
  );
}

export default App;
