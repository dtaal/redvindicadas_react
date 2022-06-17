import Header from '../../../components/header/Header';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import violencia2 from '../../images_d/2-lineasemergencia.svg';
import violencia3 from '../../images_d/3-lineasemergencia.svg';
import './Lineas.css';
import denunciar from '../../images_d/denunciar.svg';
import linea1 from '../../images_d/lineanya.svg';
import linea2 from '../../images_d/linea purpura.svg';
import linea3 from '../../images_d/icbf.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMobileRetro} from '@fortawesome/free-solid-svg-icons'
import {faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
import { getV } from '../../oportunidades/estudios';
import violentometro from '../../images_d/violentometro.svg'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';


function Lineas(){
    const vio = getV();
    return(
       <div>
        <Header/>
        <Navbar/>
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
            <h2>Emergencias</h2>
            <a href='tel:123'><FontAwesomeIcon icon={faMobileRetro} />123</a>
        </div>
        <div>
            <img src={violencia3} alt=""></img>
            <h2>Fiscalía General</h2>
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
        <h2>ICBF</h2>
        <a href='tel:018000918080'><FontAwesomeIcon icon={faPhoneSquare}  />018000918080</a>
        </div>
    </div>
    
    
    <div className="d-titulo">
        <h1>Infórmate: Tipos de Violencia</h1></div>
        <div className='violencia_container'>
        <div className='violencia'>{    
            vio.map(v=>(
                <div key={v.id} className='v_contenedor'>
                <h2>{v.violencia }</h2>
                <ul>
                    <li>{v.v1}</li>
                    <li>{v.v2}</li>
                    <li>{v.v3}</li>
                    <li>{v.v4}</li>
                </ul>
                </div>
            ))
            }
            </div>
            </div>
            <div className='titulo-violencia'><FontAwesomeIcon icon={faExclamationTriangle} />¡La violencia puede medirse, reconócela!</div>
            <div className='violentometro'><img src={violentometro}></img>
            <div className='violencias_v'>
            <div className='violencia1'>
                <p>Te golpea, te fuerza a tener relaciones sexuales (abuso sexual), te amenaza de muerte, con objetos o armas, te encierra o te aisla. </p> 
            </div>
            <div className='violencia2'>
                <p>
                    Te trata con con desprecio, te ofende verbalmente, te empuja, jalonea, te pellizca, araña, te golpea "jugando", te manosea, maneja y dispone de tus bienes, te prohibe planificar o tomar decisiones sobre tu propio cuerpo.
                </p>
            </div>
            <div className='violencia3'>
                <p>
                    Hace bromas ofensivas o hirientes, te intimida, te humilla o ridiculiza, te culpabiliza, pone en duda tus capacidades y descalifica tus opiniones, destruye objetos, controla tus relaciones, te indica como vestirte...
                </p>
                </div>
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