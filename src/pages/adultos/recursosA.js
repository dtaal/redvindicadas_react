import CardRecursos from "../../components/cardRecursos/cardRecursos";
import CardRecursos2 from "../../components/cardRecursos/cardRecursos2";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavAdult from "../../components/navAdultos/NavAdultos";
import Navbar from "../../components/navbar/Navbar";
import { getAllCards, getAllCards2 } from "../../props";
function RecursoAdult (){
    const recursos=getAllCards();
    const recursos2=getAllCards2();
    return(
        <div>
        <Header />
        <Navbar />
        <NavAdult />
        <div className="primer-recurso">
            <h2 className="title-src primary">Ciudadanía sexual</h2>
            <p>La ciudadanía sexual hace referencia a la ex- tensión que se ha hecho de los derechos humanos hacia el campo de la sexualidad y, especialmente, hacia el reconocimiento de los derechos sexuales y reproductivos de la población adolescente que es la que tradicionalmente había sido excluida por tabú.</p>
        </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div className="container">{
            recursos.map(p=>(
             <CardRecursos
             id={p.id}
             titulo={p.titulo}
             formato={p.formato}
             link={p.link}
             />   
            ))}
        </div></div>
        </div>
        <div className="line"></div>
        <h2 class="title-src secondary">Derechos sexuales y reproductivos</h2>
        <div className="container2">{
            recursos2.map(p=>(
             <CardRecursos2
             id={p.id}
             titulo={p.titulo}
             formato={p.formato}
             link={p.link}
             />   
            ))}
        </div>
        <article className="inf-complement">
        <h2 className="title-src primary">Información Complementaria</h2>
        <img src="/src/utils/images/adultos" alt=""/>
        <iframe src="https://colombia.unfpa.org/sites/default/files/pub-pdf/POSTER_DSRS_paraweb.pdf" frameborder="0" ></iframe>
        </article>
        <Footer />
        </div>
        
    );
}
export default RecursoAdult