import cambios from './img/undraw_positive_attitude_orange.svg';
import eis from './img/undraw_super_thank_you_orange.svg';
import prevencion from './img/undraw_in_thought_orange.svg';
import  {Link}  from 'react-router-dom';
import './Submenuj.css';

function Submenuj(){
    return(
        <div class="contents-buttons">
            <Link to='/redv-pers/juega-aprende/jovenes1' className='item-sub'>
                <div class="cambios"> 
                    <img src={cambios} alt="Imagen 1"/>
                    <p>Cambios</p>
                </div>
            </Link>
            <Link to='/redv-pers/juega-aprende/jovenes2' className='item-sub'>
                <div class="EIS">
                    <img src={eis} alt="Imagen 2"/>
                    <p>EIS</p>
                </div>
            </Link>
            <Link to='/redv-pers/juega-aprende/jovenes3' className='item-sub'>
                <div class="Prevencion">
                    <img src={prevencion} alt="Imagen 3"/>
                    <p>Prevención</p> 
                </div>
            </Link>
            </div>
    );
}

export default Submenuj;