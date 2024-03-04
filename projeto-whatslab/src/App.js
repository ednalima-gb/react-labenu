import { Input } from './components/Input';
import { Message } from './components/Message';
import styled from 'styled-components';

const StylePage = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  border: 1px solid red
`


function App() {

  
  return (
    <div className="App">
      <StylePage>
        <Message></Message>
        <Input ></Input>
      </StylePage>
    </div>
  );
}

export default App;
