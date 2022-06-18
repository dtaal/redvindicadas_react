import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import banner from "./img/adult-banner.svg"
import "./juega-aprende.css"
import NavGeneral from '../../components/NavJg-aprende/NavGeneral';

function Juega (){
    return(
        <div>
        <Header />
        <Navbar />
        <img src={banner} class="banner" alt=""/>
        <NavGeneral/>
        <Footer/>
        </div>
    );
}
export default Juega