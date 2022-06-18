import "./Juegos"
import "./Juegos.css"
function ModalJuegos(p){
    return(
        <div className="modal fade" id={p.idModulo} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <modal-Title id="contained-modal-title-vcenter">
                    </modal-Title>
                        
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={p.fotoModulo} className="card-img-top mx-auto d-block" alt="" />
                        <h2 class="text-center">{p.tituloModulo} </h2>
                        <p class="text-start">{p.textoModulo}</p>
                        <p class="text-start"><span> Desarrollado por:</span> {p.desarrolloxModulo} </p>
                        <div className="button-games mb-3">
                            <a className="button button-article m-1" href={p.articuloModulo} target="_blank" rel="noreferrer">Articulo del juego</a>
                            <a className="button button-game m-1" href={p.descargaModulo} target="_blank" rel="noreferrer"> Descargar juego</a>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default ModalJuegos