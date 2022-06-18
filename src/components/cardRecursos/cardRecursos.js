import down from "../../pages/adultos/img/descargaderecha.svg"
import "./cardRecursos.css"

function CardRecursos(c){
    return(
            <div className="card-border-src">
                <div className="card-src">
                    <h3>{c.titulo} </h3>
                    <p>{c.formato} </p>
                    <a href={c.link} rel="noreferrer" target="_blank"><img class="icondescarga-derecha" src={down} alt="" /></a>
                </div>
            </div>
);
}
export default CardRecursos