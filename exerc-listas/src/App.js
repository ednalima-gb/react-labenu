import { useState } from 'react';
import './App.css';
import { Filho } from './components/Filho';
import styled from 'styled-components';
import {Array} from './components/Array'
import {ListaDeArray} from './components/ListaDeArray'

const ComponentApp = styled.div`
  background-color: lightgrey;
  `



function App() {
  const [stateExerc, setStateExerc] = useState('App (Pai)')

  
  const atualizarEstado = () => {   
    if(stateExerc !== '') {
      setStateExerc('O valor foi atualizado')
    }
    
  }

  return (
    <ComponentApp>
      <p>{stateExerc}</p>
      <Filho titleFilho='Filho' atualizarEstado = {atualizarEstado} />
     <Array />
     <ListaDeArray />
    </ComponentApp>
    
  );
}

export default App;
