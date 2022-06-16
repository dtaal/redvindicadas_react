import './Jovenes1.css';
import Header from '../../../../components/header/Header';
import Navbar from '../../../../components/navbar/Navbar';
import Footer from '../../../../components/footer/Footer';
import Mmenujovenes from '../../../../components/main-menu-jovenes/Mmenujovenes';
import Submenuj from '../../../../components/sub-menu-jovenes/Submenuj';

function Jovenes1(){
    return(
        <section>
            <Header/>
            <Navbar/>
            <Mmenujovenes/>
            <Submenuj/>
            <div className="section-body-changes">
                <div className="content-body-changes">
                    <h1>Cambios en el cuerpo</h1>
                    <h2>¿Qué es la adolescencia?</h2>
                    <p>Según lo indicado en la página oficial de Profamilia Colombia, es una etapa de la vida que usualmente inicia entre los 13 y 15 años. En ella, hombres y mujeres experimentan cambios físicos, psicológicos, emocionales y sociales. La adolescencia empieza con la pubertad y termina cuando los cambios se estabilizan alrededor de los 19 años. Es importante mencionar que los cambios no se dan al mismo tiempo en todos los adolescentes: en las niñas empiezan a ser perceptibles entre los 13 y 15 años y en los niños, aproximadamente entre los 13 y 14 años.</p>
                    <h2>¿Cúales son los cambios?</h2>
                    <p>Los siguientes videos de Planned Parenthood te los cuentan...</p>
                    <div className="general-videos">
                        <div className="boxes-videos">
                            <div className="gradient-box-body">
                                <div className="gradient-body-changes">
                                    <h3>Femenino</h3>
                                    <p>Video</p>
                                    <div className="go">
                                        <a href="https://youtu.be/Pq-RJ4PoO8o" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-box-body">
                                <div className="gradient-body-changes">
                                    <h3>Masculino</h3>
                                    <p>Video</p>
                                    <div className="go">
                                        <a href="https://youtu.be/J0wMx9dnbKE" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>Tambien tenemos los artículos del sitio web de Nosotras Colombia.</p>

                        <div className="boxes-body">
                            <div className="gradient-box-body">
                                <div className="gradient-body-changes">
                                    <h3>Sistema reproductor femenino</h3>
                                    <p>Página web</p>
                                    <div className="go">
                                        <a href="https://www.nosotrasonline.com.co/entre-nosotras/cuidado-femenino/sistema-reproductor-femenino-todo-lo-que-debes-saber-sobre-tu-cuerpo/" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-box-body">
                                <div className="gradient-body-changes">
                                    <h3>Sistema reproductor masculino</h3>
                                    <p>Página web</p>
                                    <div className="go">
                                        <a href="https://www.nosotrasonline.com.co/entre-nosotras/cuidado-femenino/partes-del-cuerpo-del-hombre-que-debes-saber-con-nosotras-colombia/" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-menstruation">
            <h2>Menstruación</h2>
                <div class="content-menstruation">
                <div class="gradient-box-other">
                    <div class="gradient-menstruation">
                        <h3>Fases de la menstruación</h3>
                        <p>Página web</p>
                        <div class="go">
                            <a href="https://helloclue.com/es/articulos/ciclo-a-z/el-ciclo-menstrual-mas-que-solo-tu-periodo" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
                        </div>
                    </div>
                </div>

                <div class="gradient-box-other">
                    <div class="gradient-menstruation">
                        <h3>¿Sabes qué pasa durante la menstruación?</h3>
                        <p>Video</p>
                        <div class="go">
                            <a href="https://youtu.be/c1ZFUAMuypI" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
                        </div>
                    </div>
                </div>

                <div class="gradient-box-other">
                    <div class="gradient-menstruation">
                        <h3>El ciclo menstrual</h3>
                        <p>Video</p>
                        <div class="go">
                            <a href="https://www.youtube.com/watch?v=fYXMk6qvRvU" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x naranja"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="menstruation-foot">&nbsp;</div>
            </div>
            <Footer/>
        </section>
    );
}

export default Jovenes1;