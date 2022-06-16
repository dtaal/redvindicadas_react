import  {Link}  from 'react-router-dom';
import './Mainmenujo.css';
import dados from './feminismo(1).png';
import computador from './feminismo.png';

function Mmenujovenes(){
    return(
    <article className="contenedor-menu-jovenes">
        <div className="con-recursos">
            <img className="icono" src={computador} alt="ícono de computador"/>
            <div className="enlace">
                <Link to='/redv-pers/juega-aprende/jovenes1' className='active'>Recursos</Link>
            </div>
        </div>

        <div className="con-juegos">
            <img className="icono" src={dados} alt="ícono de dados"/>
            <div className="enlace">
                <Link to='/redv-pers/juega-aprende/jovenes-juegos' className='active'>Juegos</Link>
            </div>
        </div>
    </article>
    );
}

export default Mmenujovenes;