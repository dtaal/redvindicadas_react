import Header from '../../../../components/header/Header';
import Navbar from '../../../../components/navbar/Navbar';
import Footer from '../../../../components/footer/Footer';
import './Jovenes2.css';
import galleta from './img/imagen.png';
import Mmenujovenes from '../../../../components/main-menu-jovenes/Mmenujovenes';
import Submenuj from '../../../../components/sub-menu-jovenes/Submenuj';

function Jovenes2(){
    return(
       <div>
        <Header/>
        <Navbar/>
        <Mmenujovenes/>
        <Submenuj/>
        <section className="section-education">
            <div className="content-education"> 
                <h1>Educación Integral para la sexualidad</h1>
                <p>Por medio de la propuesta de educación integral para la sexualidad podemos enfocar conocimientos a este aspecto humano de manera concisa y con enfoque igualitario de género.
                </p>

                <div className="boxes-education">
                    <div className="boxes-content-education">
                        <div className="gradient-box box-initial-desing">
                            <div className="box-education">
                                <h3>Política de Sexualidad, Derechos Sexuales y Derechos Reproductivos</h3>
                                {/* <div className="white_space">&nbsp;</div> */}
                                <p>Documento PDF virtual</p>
                                <div className="go">
                                    <a href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/LIBRO%20POLITICA%20SEXUAL%20SEPT%2010.pdf" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-box box-second-desing">
                            <div className="box-education">
                                <h3>Educación Integral para la Sexualidad (EIS)</h3>
                                {/* <div className="white_space">&nbsp;</div>
                                <div className="white_space">&nbsp;</div> */}
                                <p>Página web</p>
                                <div className="go little">
                                    <a href="https://prep-colombia.org/eis/" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="boxes-content-aditional">
                        <div className="gradient-box box-initial-desing">
                            <div className="box-education ">
                                <h3>Orientaciones técnicas internacionales sobre educación en sexualidad</h3>
                                <p>Documento PDF virtual</p>
                                <div className="go">
                                    <a href="https://prep-colombia.org/wp-content/uploads/2020/06/orientaciones.pdf" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-box box-second-desing">
                            <div className="box-education">
                                <h3>Cápsula educativa sobre Educación Integral para la Sexualidad</h3>
                                <p>Video</p>
                                <div className="go">
                                    <a href="https://youtu.be/koVAv2-Jce0" target="_blank" rel='noreferrer'><i class="fa-solid fa-circle-chevron-right fa-3x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="education-foot">&nbsp;</div>
        </section>

        <section className="section-complement">
            <h1>Información complementaria</h1>
            <h2>Diversidad afectivo-sexual y de género</h2>
            <img src={galleta} alt="Galleta de Jengibre"/>
            <p>Para ampliar la información referente al tema le invitamos a visitar:</p>
            <a href="https://steilas.eus/files/2015/05/GUIA-diversidad-sexual-y-genero.-STEILAS-2015.pdf" target="_blank" rel="noopener noreferrer">Tomado de STEILAS</a>
        </section>

        <div className="education-foot">&nbsp;</div>
        <Footer/>
       </div>
    );
}

export default Jovenes2;