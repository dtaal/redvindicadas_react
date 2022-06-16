import Header from '../../../../components/header/Header';
import Navbar from '../../../../components/navbar/Navbar';
import Footer from '../../../../components/footer/Footer';
import './Jovenes3.css';
import Mmenujovenes from '../../../../components/main-menu-jovenes/Mmenujovenes';
import Submenuj from '../../../../components/sub-menu-jovenes/Submenuj';

function Kitfem(){
    return(
       <div>
        <Header/>
        <Navbar/>
        <Mmenujovenes/>
        <Submenuj/>
        <section className="section-prevention">
            <div className="content-prevention"> 
                <h1>Prevención de violencias</h1>
                <p>La violencia es el “uso intencional de la fuerza física o el poder real o como amenaza contra uno mismo, una persona, grupo o comunidad que tiene como resultado la probabilidad de daño psicológico, lesiones, la muerte, privación o mal desarrollo.</p>

                <div className="gradient-box">
                    <div className="main-gradient-prevention">
                        <p>Teniendo en cuenta el artículo de <a href="https://www.paho.org/es/temas/prevencion-violencia" target="_blank" rel='noreferrer'>la Organización Panamericana de la Salud</a> la prevención se centra en las siguientes líneas principales:</p>

                        <div className="box-prevention">
                            <div className="gradient-box">
                                <div className="prevention-women">
                                    <a href="https://www.paho.org/es/temas/violencia-contra-mujer" target="_blank" rel='noreferrer'>Violencia contra la mujer</a>
                                </div>
                            </div>

                            <div className="gradient-box">
                                <div className="prevention-kids">
                                    <a href="https://www.paho.org/es/temas/violencia-contra-ninas-ninos" target="_blank" rel='noreferrer'>Violencia contra las niñas y los niños</a>
                                </div>
                            </div>

                            <div className="gradient-box">
                                <div className="prevention-young">
                                    <a href="https://www.paho.org/es/temas/violencia-juvenil" target="_blank" rel='noreferrer'>Violencia juvenil</a>
                                </div>
                            </div>
                        </div>

                        <p>De igual manera se brinda la información de la página Equidad Mujer en forma de cartilla, una manera muy resumida del paso a seguir en caso de violencia intrafamiliar: </p>

                        <div className="button-see">
                            <a href="http://www.equidadmujer.gov.co/oag/Documents/cartilla_Prevencion_violencia_intrafamiliar.pdf" class="boton-morado" target="_blank" rel='noreferrer'>Ver documento</a>
                        </div>

                        <h3>Recuerda revisar la ruta de atención en nuestra sección de: </h3>
                        <h3 className="go-lines"><a href="../../emergencias.html">Líneas de emergencia</a></h3>
                    </div>
                </div>
            
            <div className="prevention-foot">&nbsp;</div>
            </div>
        </section>

        <section className="section-no-game">
            <h2>Esto es un juego, tu vida NO</h2>

            <p>"Esto es un juego, tu vida NO" es una campaña conjunta de Casa E Social y UNFPA Colombia, para informar a las/los adolescentes sobre sus derechos sexuales y reproductivos a través de situaciones de toma de decisión, usando el sentido del humor como recurso pedagógico. </p>

            <div className="boxes-no-game">
                <div className="gradient-box">
                    <div className="box-no-game">
                        <h3>Capitulo 1</h3>
                        <p>Video</p>
                        <div className="go">
                            <a href="https://youtu.be/NMPm8jAko24" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
                        </div>
                    </div>
                </div>

                <div className="gradient-box">
                    <div className="box-no-game">
                        <h3>Capitulo 2</h3>
                        <p>Video</p>
                        <div className="go">
                            <a href="https://youtu.be/MYZXL7oCuxQ" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
                        </div>
                    </div>
                </div>

                <div className="gradient-box">
                    <div className="box-no-game">
                        <h3>Capitulo 3</h3>
                        <p>Video</p>
                        <div className="go">
                            <a href="https://youtu.be/6vTsdLz871s" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="no-game-foot">&nbsp;</div>
        </section>
        <Footer/>
       </div>
    );
}

export default Kitfem;