import "./Juegos.css"
import ModalJuegos from "./ModalJuegos";
function JuegoComponent(p){
    return(
        <div className="container-game">
        <div className="game">
            <div>
                <img src={p.foto} alt=""/>
            </div>
            <div className="group-text">
            <h2>{p.titulo} </h2>
            <p>{p.texto}</p>
            <div className="button-games">
                <a className="button button-article" data-bs-toggle="modal" data-bs-target={`#id${p.id}`} >Ver más</a> 
            </div>
        </div>
        </div>
    <ModalJuegos
            idModulo={`id${p.id}`}
             tituloModulo={p.titulo}
             textoModulo={p.texto}
             desarrolloxModulo={p.desarrollox}
             articuloModulo={p.articulo}
             descargaModulo={p.descarga}
             fotoModulo={p.foto}/>
    </div>
    );
}
export default JuegoComponent