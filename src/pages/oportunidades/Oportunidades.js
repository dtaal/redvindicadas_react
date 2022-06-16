import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Style from '../oportunidades/Oportunidades.css';
import banner from "../images_d/bannerestudios.svg";
import vectorarriba from "../images_d/vector-estudios.svg";
import vectorabajo from "../images_d/vector-estudios2.svg";
import img1 from "../images_d/img1-estudios.svg"
import img2 from "../images_d/img2-estudios.svg"
import { getAllestudios } from './estudios';
import { getAllcursos } from './estudios';


function Oportunidades(){
    const estudio = getAllestudios();
    const cursos = getAllcursos();
    return(
       <div>
        <Header/>
        <Navbar/>
        <div className='banner-est'><img src={banner}></img></div>
        <div className='titulo-estudios'><h1>Becas</h1></div>
        <div className='vector-estudios'><img src={vectorarriba}></img></div>
        <div className="img-estudios"><img src={img1}></img>
        <div className="texto-estudios">
        <p>¿Estás buscando nuevas oportunidades?
            ¡Entérate de las <h2>mejores</h2><h1>Becas!</h1>aquí.</p>
            <p>
            (Si quieres más info, pasa tu cursor sobre la oferta o dale click y entérate de los detalles)</p>
        </div>
        </div>
        <div className="container">
            <figure className='container'>
            {estudio.map(estudio=>( 
            <div key={estudio.id} className="hover-estudios">
                <figure>
            <h2>
                {estudio.beca}
            </h2>
            <img src={estudio.img}></img>
            <h2>
                {estudio.inst}
            </h2>
            <h3>
                {estudio.fecha}
            </h3>
            <div key={estudio.id} className="capa-estudios">
            <h2>
                {estudio.beca}
            </h2>
            <h2>
                {estudio.inst}
            </h2>
            <h3>
                {estudio.fecha}
            </h3>
            <p>
                {estudio.acerca}
            </p>
            <a href={estudio.link} target='_blank' rel="noreferrer">
                Si quieres más info da click aquí
            </a>
            
            </div>
            </figure>
            </div>
            
        ))
        }
        </figure>
        </div> 
       
        <div className='titulo-estudios'><h1>Cursos Gratuitos</h1></div>
        <div className="img-estudios"><img src={img2}></img>
        <div className="texto-estudios">
        <p>Aprovecha tu tiempo libre y únete al mundo del Tech.
        ¡Entérate de los <h2>mejores</h2><h1>Cursos Gratuitos!</h1>aquí.</p>
        <p>
        (Si quieres más info, pasa tu cursor sobre la oferta o dale click y entérate de los detalles)</p>
        </div>
        </div>
        <div className="container">
            <figure className='container'>
            {cursos.map(cur=>( 
            <div key={cur.id} className="hover-estudios">
                <figure>
            <h2>
                {cur.beca}
            </h2>
            <img src={cur.img}></img>
            <h2>
                {cur.inst}
            </h2>
            <h3>
                {cur.fecha}
            </h3>
            <div key={cur.id} className="capa-estudios">
            <h2>
                {cur.beca}
            </h2>
            <h2>
                {cur.inst}
            </h2>
            <h3>
                {cur.fecha}
            </h3>
            <p>
                {cur.acerca}
            </p>
            <a href={cur.link} target='_blank' rel="noreferrer">
                Si quieres más info da click aquí
            </a>
            </div>
            </figure>
            </div>
        ))
        }

        </figure>
        </div> 
        <div className='vector-estudios-2'><img src={vectorabajo}></img></div>
        <Footer />
       </div>
       
    );
}

export default Oportunidades;