import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Inicio.css';
import volcanicas from './img/logo-volcanicas.png';
import manifiesta from './img/logo-manifiesta.png';
import igualadas from './img/logo-igualadas.png';
import calendario from './img/imgcalendario.svg';

function Inicio(){

    let fecha = new Date();
    let hoy=fecha.getDate();
    let mesActual = fecha.getMonth() + 1; 
    let mesActualText='';

    switch (mesActual) {
        case 1:
            mesActualText='Enero'
        break;

        case 2:
            mesActualText='Febrero'
        break;

        case 3:
            mesActualText='Marzo'
        break;

        case 4:
            mesActualText='Abril'
        break;

        case 5:
            mesActualText='Mayo'
        break;

        case 6:
            mesActualText='Junio'
        break;

        case 7:
            mesActualText='Julio'
        break;

        case 8:
            mesActualText='Agosto'
        break;

        case 9:
            mesActualText='Septiembre'
        break;

        case 10:
            mesActualText='Octubre'
        break;

        case 11:
            mesActualText='Noviembre'
        break;

        case 12:
            mesActualText='Diciembre'
        break;
    
        default:
        break;
    }

    return(
       <div>
           <Header/>
           <Navbar/>

            <section className="home-banner">
                <p className="pink-title home-title">¡Nosotras<span className="white-title home-title"> hacemos </span> el cambio!</p>
            </section>

            <section className='presentacion'>
                <h1 className='title-presen'>¿Qué es <span>REDVINDICADAS</span>?</h1>
                <p>Es la propuesta académica del programa Tech Power de Kuepa Edutech en donde se busca visibiliar y exponer de manera didáctica y lúdica los conceptos de igualdad de género, feminismo y sexualidad sin tabú.</p>
                <div className='contacto-present'>
                    <p><span>Contáctenos:</span> redvindicadas@gmail.com</p>
                </div>
            </section>

            <section className='dia-especial'>
                <h1>Día especial</h1>
                <p>Para mantenerse informado sobre lo acontecido en un día como hoy (una celebración, personaje importante o actividades a realizar...), te invitamos a leer:</p>
                <div className='nuevo-calendario'>
                    <div className='hoy-contenido'>
                        <div className='especial-hoy'>
                        <div className='hoy'>{hoy} de {mesActualText}</div>
                        <div className='cuerpo-hoy'>
                            <h3>Hoy en la historia de la mujer</h3>
                            <p>Conozca cada día a mujeres conocidas y menos conocidas que cambian las cosas, que rompen el techo de cristal y que se rebelan.</p>
                            <a href='https://todayinwomenshistory.org/' target='_blank' rel='noreferrer'>Nuestra historia es importante.</a>
                        </div>
                        </div>
                        <img src={calendario} alt='Imagen de calendario mujeres'/>
                    </div>
                </div>
            </section>

            <div className="information-home">
            <div className="vector">
                <h2>Infórmate más</h2>
            </div>

            <section className="info-home">
                <article className="cards-container">
                    <div className="home-cards card-border">
                        <h5>Volcánicas</h5>
                        <img className="logo-home-cards" src={volcanicas} alt=''/>
                        <div className="go-home">
                            <a href="https://volcanicas.com/" target="_blank"rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-2x"></i></a>
                        </div>
                    </div>
                    <div className="home-cards card-border">
                        <h5>Manifiesta</h5>
                        <img className="logo-home-cards" src={manifiesta} alt=''/>
                        <div className="go-home">
                            <a href="https://manifiesta.org/" target="_blank" rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-2x"></i></a>
                        </div>
                    </div>
                    <div className="home-cards card-border">
                        <h5>Las Igualadas</h5>
                        <img className="logo-home-cards" src={igualadas} alt=''/>
                        <div className="go-home">
                            <a href="https://www.youtube.com/c/LasIgualadas" target="_blank" rel='noreferrer'><i className="fa-solid fa-circle-chevron-right fa-2x"></i></a>
                        </div>
                    </div>
                </article>
            </section>
        </div>

           <Footer/>
       </div>
    );
}

export default Inicio;