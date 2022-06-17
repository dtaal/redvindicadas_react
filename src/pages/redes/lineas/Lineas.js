import Header from '../../../components/header/Header';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import violencia1 from '../../images_d/1-lineasemergencia.svg';
import violencia2 from '../../images_d/2-lineasemergencia.svg';
import violencia3 from '../../images_d/3-lineasemergencia.svg';
import style from './Lineas.css';
import denunciar from '../../images_d/denunciar.svg';
import Violencia from './LineasModal';
import linea1 from '../../images_d/lineanya.svg';
import linea2 from '../../images_d/linea purpura.svg';
import linea3 from '../../images_d/icbf.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobileRetro} from '@fortawesome/free-solid-svg-icons'
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
import { getV } from '../../oportunidades/estudios';
import { useState } from 'react';

function Lineas(){
    const vio = getV();
    const [ isOpenModal, setIsOpenModal ] =useState(false);
    const openModal=()=>{
        setIsOpenModal (true);
    }
    return(
       <div>
        <Header/>
        <Navbar/>
        <Violencia/>
        <div className="d-titulolineas">
        <h1>Líneas de Emergencia</h1>
    </div>
    <div className="d-titulo">
        <h1>Encuentra ayuda</h1>
        <p>Líneas gratuitas a las que puedes llamar sin necesidad de saldo en tu celular</p>
    </div>
    <div className="lineasdeemergencia">
        <div>
            <img src={violencia2} alt=""></img>
            <h2>Línea de Emergencia</h2>
            <a href='tel:123'><FontAwesomeIcon icon={faMobileRetro} />123</a>
        </div>
        <div>
            <img src={violencia3} alt=""></img>
            <h2>Línea de la Fiscalía General</h2>
            <a href='tel:122'><FontAwesomeIcon icon={faMobileRetro} />122</a>
        </div>
        <div>
        <img src={linea1} alt=""></img>
        <h2>Línea de atención a niños, niñas y adolescentes</h2>
        <a href='tel:144'><FontAwesomeIcon icon={faPhoneSquare}  />144</a>
        </div>
        <div>
        <img src={linea2} alt=""></img>
        <h2>Línea Púrpura</h2>
        <a href='tel:018000112137'><FontAwesomeIcon icon={faPhoneSquare}  />018000112137</a>
        </div>
        <div>
        <img src={linea3} alt=""></img>
        <h2>Instituto Colombiano de Bienestar Familiar</h2>
        <a href='tel:018000918080'><FontAwesomeIcon icon={faPhoneSquare}  />018000918080</a>
        </div>
    </div>
    
    
    <div className="d-titulo">
        <h1>Infórmate: Tipos de Violencia</h1></div>
        <div className='contenedor_violencia'>
        <div className='violencia'>{    
            vio.map(v=>(
                <div key={v.id} className='v_contenedor'>
                <h2>{v.violencia }</h2>
                <button className='redflag' onClick={openModal}>Red flags</button> {isOpenModal && <Violencia />}
                </div>
            ))
            }
            </div>
            </div>
    <div className="d-denunciar">
        <h1>¿Dónde denunciar?</h1>
        <img src={denunciar} alt=""></img>
        
    </div>
    <div className="rutaatencion">
        <h1>Ruta de atención</h1>
        <a href="https://bogota.gov.co/sites/default/files/inline-files/ruta-atencion-mujeres-bogota.pdf" target="_blank">Revisa aquí información sobre la violencia basada en género e información sobre rutas de atención a mujeres</a>
    </div>
    
        <Footer/>
       </div>

    );
}

export default Lineas;