import './App.css';
import { ListItem } from './components/ListItem';
import { VideoCard } from './components/VideoCard';

function App() {

  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }


  return (
    <div>
        <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>

        <main>
            <nav className="menu-vertical">
               <ListItem/>
            </nav>

            <section className="painel-de-videos">
           
              <VideoCard/>
                 {/* <div className="box-pagina-principal media1" >
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div> */}
                <div className="box-pagina-principal media2" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div>
                <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div>
                <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div>
                <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div>
                <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div>
                <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div>
                <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                    <button onClick={reproduzVideo}>Reproduzir vídeo</button>
                </div> 
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;
