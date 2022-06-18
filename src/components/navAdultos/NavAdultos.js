import "./NavAdultos.css"
import book from "../../pages/juega-aprende/img/book.svg"
import linea from "../../pages/adultos/img/adul-linea.svg"
import play from "../../pages/juega-aprende/img/juego.svg"
import { Link } from "react-router-dom";
function NavAdult(){
    return(
        <div className="container-barnav">
            <div className="container-titlebar">
                <h1 className="h1-barra">Recursos de Padres y Adultos</h1>
            </div>
            <div className="barnav-recursosyjuegos">
                    <div className="barnav-interna">
                        <img className="img-menu" src={book} alt=""/>
                        <Link className="button-adult" to="/recursosAdultos">Recursos</Link>
                    </div>
                <img className="imglinea-nav" src={linea} alt=""/>
                    <div className="barnav-interna">
                            <img className="img-menu" src={play} alt=""/>
                            <Link className="desactive" to="/juegoAdultos">Juegos</Link>
                    </div>
            </div>
        </div>
    );
}
export default NavAdult