import './App.css';
import React from 'react';
import {Contador} from './components/Contador'
import {Inputs} from './components/Inputs'

function App() {
  return (
    <>
      <Contador button={'clique aqui'} />
      <Inputs title1 = {'inputName'} title2 = {'inputEmail'}/>
    </>
  );
}

export default App;
