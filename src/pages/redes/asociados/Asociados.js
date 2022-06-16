import Header from '../../../components/header/Header';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import './Asociados.css'
import { getAllf } from '../../oportunidades/estudios';
import {getAllcole} from '../../oportunidades/estudios';
import {getAllcolect} from '../../oportunidades/estudios';
import Formulario from '../../../components/comp_formulario/Form';
import { useState } from 'react';
 
function Asociados(){
    const [ isOpenForm, setIsOpenForm ] =useState(false);
    const fundacion=getAllf();
    const colect=getAllcolect();
    const cole=getAllcole();
    const openForm=()=>{
        setIsOpenForm (true);
    }
    return(
       <><div>
            <Header />
            <Navbar />
            <div className="d-titulolineas">
                <h1>Asociados</h1>
            </div>
            <div className="visibilidad-asociados">
                <p>¿Quieres que nos pongamos en contacto contigo?
                    Diligencia el formulario
                </p>
                <button className='form-aso' onClick={openForm}>Aquí</button> {isOpenForm && <Formulario />}
            </div>
                
            <div className="asociados-titulos"><h1>Fundaciones</h1></div>
            <div className='contenedor_1'>
            <div className='contenedor'>{    
            fundacion.map(f=>(
                <div key={f.id} className='d-container'>
                <h1>{f.fundacion}</h1>
                <img src={f.img}></img>
                <p>{f.sobre}</p>
                <a href={f.link}target="_blank" rel="noreferrer">Link del sitio</a>
                </div>
                
            ))
            }
            </div>
             <div className="asociados-titulos"><h1>Colectivos</h1></div>
             <div>
            <div className='contenedor_2'>{ 
            colect.map(c=>(
                <div key={c.id} className='d-container'>
                <h1>{c.fundacion}</h1>
                <img src={c.img}></img>
                <p>{c.sobre}</p>
                <a href={c.link} target="_blank" rel="noreferrer">Link del sitio</a>
                </div>
                
            ))
            }
            </div>
            
            <div className="asociados-titulos"><h1>Colegios</h1> </div>
            <div className='contenedor_3'>{ 
            cole.map(c=>(
                <div key={c.id} className='d-container'>
                <h1>{c.fundacion}</h1>
                <img src={c.img}></img>
                <p>{c.sobre}</p>
                <a href={c.link} target="_blank" rel="noreferrer">Link del sitio</a>
                </div>
                
            ))
            }
            
            </div></div>
            </div>
        </div><Footer/></>
    );
}

export default Asociados;
