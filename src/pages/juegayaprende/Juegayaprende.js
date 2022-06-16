import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Mmenujovenes from '../../components/main-menu-jovenes/Mmenujovenes';

function Juegayaprende(){
    return(
       <div>
        <Header/>
        <Navbar/>
        <h1>Juega y aprende</h1>
        <p>Menu interno temporal</p>
        <Mmenujovenes/>
        <Footer/>
       </div>
    );
}

export default Juegayaprende;