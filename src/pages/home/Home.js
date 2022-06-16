import './Home.css';
import logo from '../../icons/logo-redvin.svg'
import {Link} from 'react-router-dom';

function Home(){
    return(
       <div className='initial-screen'>
           <main className="initial-main">
		    <section className="initial-logo">
			    <img src={logo} alt='Logo Redvindicadas'/>
			    <h1>Redvindicadas</h1>
		    </section>
		<p className="pink-title initial-title">¡Nosotras<span className="white-title initial-title"> hacemos </span> el cambio!</p>
		<button className="initial-button"><Link to='/redv-pers/inicio' className='item'>Ingresar</Link></button>
	</main>
       </div>
    );
}

export default Home;