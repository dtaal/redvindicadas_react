import Header from '../../../components/header/Header';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import style from './Asociados.css'
import { getAllf } from '../../oportunidades/estudios';
import {getAllcole} from '../../oportunidades/estudios';
import {getAllcolect} from '../../oportunidades/estudios';
 
function Asociados(){
    const fundacion=getAllf();
    const colect=getAllcolect();
    const cole=getAllcole();
    return(
       <><div>
            <Header />
            <Navbar />
            <div className="d-titulolineas">
                <h1>Asociados</h1>
            </div>
            <div className="visibilidad-asociados">
                <p>Si quieres tener visibilidad para tu fundación, colectivo o colegio, no dudes en contactarnos al correo
                    redvindicadasweb@gmail.com</p>
            </div>
                
            <div className="asociados-titulos"><h1>Fundaciones</h1></div>
            <div className='contenedor'>{
            fundacion.map(f=>(
                
                <div key={f.id} className='d-container'>
                <h1>{f.fundacion}</h1>
                <img src={f.img}></img>
                <p>{f.sobre}</p>
                <a>{f.link}</a>
                
                </div>
            ))
            }
             <div className="asociados-titulos"><h1>Colectivos</h1></div>
            <div className='contenedor_2'>{ 
            colect.map(c=>(
                <div key={c.id} className='d-container'>
                <h1>{c.fundacion}</h1>
                <img src={c.img}></img>
                <p>{c.sobre}</p>
                <a>{c.link}</a>
                </div>
            ))
            }
            <div className="asociados-titulos"><h1>Colegios</h1> </div>
            
            <div className='contenedor_3'>{ 
            cole.map(c=>(
                <div key={c.id} className='d-container'>
                <h1>{c.fundacion}</h1>
                <img src={c.img}></img>
                <p>{c.sobre}</p>
                <a>{c.link}</a>
                </div>
            ))
            }
            
            </div></div>
            </div>
        </div><Footer/></>
    );
}

export default Asociados;
