import './Header.css'
import logo from '../../icons/logo-redvin.svg'
import  {Link}  from 'react-router-dom';

function Header(){
    return(
        <header>
            <div className="header-logo">
                <Link to='/redv-pers/' className='item'><img src={logo} className="logo" alt="logo" /></Link>
                <h1>Redvindicadas</h1>
            </div>
        </header>
    );
}

export default Header;