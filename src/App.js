import logoLabenu from './img/logo.png';
import './App.css';

function App() {

  const onClickButton = () => {
    alert('Botão foi clicado!')
  }

  return (
    <div className="App">  
        <h1>Aprenda React com a Labenu!</h1>
        <div>
            <img src={logoLabenu} className="App-logoLabenu" alt="logo da Labenu" />
        </div>
        <div>
            <a
            className="App-link"
            href="https://www.labenu.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site da Labenu!
          </a>
        </div>
        <div>
            <button onClick = {onClickButton}>Clique aqui!</button>  
        </div>
    </div>
  );
}

export default App;
