import Header from '../../../components/header/Header';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import violencia1 from '../../images_d/1-lineasemergencia.svg';
import violencia2 from '../../images_d/2-lineasemergencia.svg';
import violencia3 from '../../images_d/3-lineasemergencia.svg';
import style from './Lineas.css';
import denunciar from '../../images_d/denunciar.svg';

function Lineas(){
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
            <img src={violencia1} alt=""></img>
            <h2>Línea Nacional</h2>
            <h2>155</h2>
        </div>
        <div>
            <img src={violencia2} alt=""></img>
            <h2>Línea de Emergencia</h2>
            <h2>123</h2>
        </div>
        <div>
            <img src={violencia3} alt=""></img>
            <h2>Línea de la Fiscalía General</h2>
            <h2>122</h2>
        </div>
    </div>

    <div className="d-titulo">
        <h1>Infórmate: Tipos de Violencia</h1>
    </div>
    <div className="violencias">
        <div className="dropdown">
           <span>Violencia Económica</span>
        <div className="dropdown-content"> 
            <ul>
                <li>Tiene acceso a todas tus cuentas financieras y documentos de identidad.</li>
                <li>Limita tu dinero y lo que puedes hacer con él.</li>
                <li>Te roba tu dinero.</li>
                <li>Saca préstamos, créditos, tarjetas, etc, a tu nombre sin tu consetimiento. </li>
            </ul>
        </div>
    </div>
    <div className="dropdown">
        <span>Violencia Psicológica</span>
     <div className="dropdown-content"> 
         <ul>
             <li>Te manipula emocionalmente.</li>
             <li>Te controla, controla tus relaciones interpersonales, tu forma de vestir, de actuar, de pensar etc.</li>
             <li>Hace comentarios hirientes sobre ti mismx y te genera inseguridades.</li>
         </ul>
     </div>
 </div><div className="dropdown">
    <span>Violencia Física</span>
 <div className="dropdown-content"> 
     <ul>
         <li>Golpea las cosas a tu al rededor si se enoja</li>
         <li>Te pellizca, muerde, empuja, aprieta, etc,lastimándote.</li>
         <li>Te golpea.</li>
     </ul>
 </div>
</div><div className="dropdown">
    <span>Violencia Sexual</span>
 <div className="dropdown-content"> 
     <ul>
         <li>Te insiste en tener relaciones sexuales o cualquier otro acto sexual, aunque no quieras.</li>
         <li>Toca tu cuerpo sin tu consentimiento.</li>
         <li>Hace que toques su cuerpo, sin tu consetimiento.</li>
     </ul>
 </div>
</div>
</div>
    <div className="lineasdeemergencia">
        <h1>Conoce otras líneas de asesoramiento</h1>
        <p>Instituto Colombiano de Bienestar Familiar ICBF, línea Gratuita Nacional: 018000918080</p>
        <p>Línea de Protección a Niños Niñas y Adolescentes: 141. WhatsApp: 3202391685-3208655450-3202391320</p>
        <p>Línea Púrpura en Bogotá: 018000112137, número gratuito desde teléfono fijo o celular. Whatsapp 3007551846</p>
    </div>
    
    <div className="lugaresseguros">
        <h1>Lugares seguros en Bogotá</h1>
        <p>
            En la actualidad existe una red de 700 establecimientos de comercio distribuidos por toda Bogotá para
            brindar atención a las mujeres, que corresponden a las tiendas D1, Justo & Bueno, Ara, droguerías Farmatodo,
            estaciones Terpel y tiendas Altoque y Tostao.

            Las 37 estaciones propias de Terpel y 7 tiendas Altoque prestan atención las 24 horas del día para que
            puedan encontrar un espacio en el que puedan sentirse seguras en cualquier momento del día o de la noche.
        </p>
    </div>

    <div className="d-denunciar">
        <h1>¿Dónde denunciar?</h1>
        <img src={denunciar} alt=""></img>
    </div>
    <div className="rutaatencion">
        <h1>Ruta de atención</h1>
        <a href="../utils/Ruta-de-atención-casos-violencia-género.pdf" target="_blank">Revisa aquí información sobre la violencia basada en género e información sobre rutas de atención a mujeres</a>
    </div>
    
        <Footer/>
       </div>

    );
}

export default Lineas;