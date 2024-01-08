import React from 'react';

export function VideoCard () {

  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

    return (
        
        <div className="box-pagina-principal media1">
            <img src="https://picsum.photos/400/400?a=1 " alt=""/>
            <h4>{titulo}</h4>
            <button onClick={reproduzVideo}>Reproduzir vídeo</button>
        </div>
     
                
    )
}