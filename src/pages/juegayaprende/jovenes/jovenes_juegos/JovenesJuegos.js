import Header from '../../../../components/header/Header';
import Navbar from '../../../../components/navbar/Navbar';
import Footer from '../../../../components/footer/Footer';
import './JovenesJuegos.css'
import cerebriti from './img/Cerebriti.png';
import carrera from './img/Carrera.png';
import dados from './img/Dados.png';
import Mmenujovenes from '../../../../components/main-menu-jovenes/Mmenujovenes';

function JovenesJuegos(){
    return(
       <div>
        <Header/>
        <Navbar/>
        <Mmenujovenes/>
        <section class="section-games">
                <div class="box-game">
                    <div class="box-division">
                        <div class="games-text">
                            <h2>¿Cuánto sabes de igualdad y diversidad sexual?</h2>
                            <p>Cuestionario super rápido en el que se pondrá a prueba tu conocimiento sobre el tema.</p>
                        </div>
                        <div class="games-image">
                            <img src={cerebriti} alt="Imagen del sitio web Cerebriti"/>
                        </div>
                    </div>
                    <div class="games-buttons">
                        <a href="https://doncel.org.ar/2019/05/10/juego-el-derecho-a-elegir/" class="juego-articulo" target="_blank" rel='noreferrer'>Artículo del juego</a>
                    </div>
                </div>
    
                <div class="box-game box-second-game">
                    <div class="box-division second-game">
                        <div class="games-text">
                            <h2>Carrera de la Sexualidad</h2>
                            <p>Desarrollado por la Secretaría de gobierno de salud de Argentina , y se reversiona en formato virtual para poder jugar a través de clases remotas, se propone jugar mientras se mantiene una clase en vivo o por streaming.</p>
                        </div>
                        <div class="games-image">
                            <img src={carrera} alt="Imagen del juego sugerido"/>
                        </div>
                    </div>
                    <div class="games-buttons">
                        <a href="https://doncel.org.ar/2019/05/10/juego-el-derecho-a-elegir/" class="juego-articulo" target="_blank" rel='noreferrer'>Artículo del juego</a>
                        <a href="https://doncel.org.ar/wp-content/uploads/2019/05/Juego_Doncel_Kaleidos.pdf" class="juego-descarga" target="_blank" rel='noreferrer'>Descargar juego</a>
                    </div>
                </div>
    
                <div class="box-game">
                    <div class="box-division">
                        <div class="games-text">
                            <h2>Dinámicas de grupo para prevenir la violencia de pareja en población adolescente y juvenil</h2>
                            <p>En este caso, actividades propuestas por el Psicólogo clínico y profesor Español Jesús Herranz Bellido en los cuales se busca la reflexión sobre el tema.
                            </p>
                        </div>
                        <div class="games-image">
                            <img src={dados} alt="Imagen representativa de las actividades lúdicas sugeridas"/>
                        </div>
                    </div>
                    <div class="games-buttons">
                        <a href="https://www.researchgate.net/publication/337440097_Dinamicas_de_grupo_para_prevenir_la_violencia_de_pareja_en_poblacion_adolescente_y_juvenil_20_Edicion_2019" class="juego-articulo" target="_blank" rel='noreferrer'>Artículo del juego</a>
                        <a href="https://www.researchgate.net/profile/Jesus-Herranz-Bellido/publication/337440097_Dinamicas_de_grupo_para_prevenir_la_violencia_de_pareja_en_poblacion_adolescente_y_juvenil_20_Edicion_2019/links/5dd7a489458515dc2f420350/Dinamicas-de-grupo-para-prevenir-la-violencia-de-pareja-en-poblacion-adolescente-y-juvenil-20-Edicion-2019.pdf" class="juego-descarga" target="_blank" rel='noreferrer'>Descargar juego</a>
                    </div>
                </div>
            </section>
        <Footer/>
       </div>
    );
}

export default JovenesJuegos;