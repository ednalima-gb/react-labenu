import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const ItemPessoas = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid black;
width: 400px;
max-width: 400px;
background-color: orange;
color: black;
padding: 10px;
margin: 10px;
`

function App() {
  const [inputId, setInputId] = useState('');
  const [inputNome, setInputNome] = useState('');
  const [inputIdade, setInputIdade] = useState('');

  const [arrayDados, setArrayDados] = useState([
    {
      id: 1,
      nome: 'Caio',
      idade: 26
    }, 
    {
      id: 2,
      nome: 'Chijo',
      idade: 27
    },
    {
      id: 3,
      nome: 'Lais',
      idade: 28
    },
    {
      id: 4,
      nome: 'Mandi',
      idade: 29
    }
  ]) 


  const handleInputId = (event) => {
    const novoId = event.target.value;
    setInputId(novoId);
  }

  const handleInputNome = (event) => {
    const novoNome = event.target.value;
    setInputNome(novoNome);
  }

  const handleInputIdade = (event) => {
    const novaIdade = event.target.value;
    return setInputIdade(novaIdade);
  }
  
 const listaDePessoas = arrayDados.map((pessoa) => {

  const removerPessoa = () => {
    const novaLista = [...arrayDados]
    const index = novaLista.findIndex(elemento => elemento === pessoa)
    novaLista.splice(index, 1)

    setArrayDados(novaLista)
  }
  
  return <ItemPessoas>
    <p>{pessoa.nome}</p>
    <p>{pessoa.idade}</p>
    <button onClick={removerPessoa}>x</button>
  </ItemPessoas>
 })
 

const adicionarPessoa = () => {
  const novoArrayDados = [...arrayDados, {id: inputId, nome: inputNome, idade: inputIdade}]
  setArrayDados(novoArrayDados)
}


  return (

    <div className="App">

        

        <label htmlFor="id">Id: </label>
        <input type="text" id="id" value={inputId} onChange={handleInputId} />
          
        <label htmlFor='nome'>Nome: </label>
        <input type='text' id='nome' value={inputNome} onChange={handleInputNome}/>

        <label htmlFor='idade'>Idade:</label>
        <input type='text' id='idade' value={inputIdade} onChange={handleInputIdade}/>

        <button onClick={adicionarPessoa}>Inserir</button>

      
        {listaDePessoas}
        
     
     
    </div>
  );
}

export default App;
