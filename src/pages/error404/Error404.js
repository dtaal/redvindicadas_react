import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Error404(){
    return(
       <div>
           <Header/>
           <Navbar/>
           <h1>Página no encontrada (Error 404)</h1>
           <Footer/>
       </div>
    );
}

export default Error404;