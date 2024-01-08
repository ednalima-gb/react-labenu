import React from 'react';

export function VideoCard (props) {

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

    return (
        
        <div className="box-pagina-principal media1">
            <img src="https://picsum.photos/400/400?a=1 " alt=""/>
            <h4>{props.text}</h4>
            <button onClick={reproduzVideo}>Reproduzir vídeo</button>
        </div>
     
                
    )
}