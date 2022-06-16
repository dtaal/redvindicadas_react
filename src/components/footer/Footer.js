import './Footer.css';
import logo from '../../icons/logo-redvin.svg';
import techP from '../../icons/tech_power.png';

function Footer() {
    return (
        <footer>
        <div className="foot-email">
            <img src={logo} className="logo" alt="logo"/>
            <h1>Redvindicadas</h1>
            <p>redvindicadas@gmail.com</p>
            </div>

        <div className="foot-developers">
            <h3>Diseño por devs de Kuepa</h3>
            <ul className="foot-developers-list">
                <div className="list-section">
                    <li>Daniela Tarazona @</li>
                    <li>Danna Sanchez @</li>
                    {/* <li>Laura Castro @</li> */}
                </div>
                <div className="list-section">
                    <li>Lizeth Rico @</li>
                    <li>Viviana Murillo @</li>
                </div>
            </ul>
        </div>

        <div className="foot-tech-power">
            <h3>Tech Power<br />Creando tu futuro</h3>
            <img src={techP} className="techP" alt="Imagen Tech Power"/>
        </div>
    </footer>
    );
  }

  export default Footer;