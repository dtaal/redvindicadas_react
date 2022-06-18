import down from "../../pages/adultos/img/descargaderecha.svg"
import "./cardRecursos.css"

function CardRecursos2(c2){
    return(
            <div className="card-border-src">
                <div className="card-src">
                    <h3>{c2.titulo} </h3>
                    <p>{c2.formato} </p>
                    <a href={c2.link} rel="noreferrer" target="_blank"><img class="icondescarga-derecha" src={down} alt="" /></a>
                </div>
            </div>
);
}
export default CardRecursos2