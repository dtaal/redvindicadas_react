import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import JuegoComponent from "../../components/juegos/Juegos";
import NavAdult from "../../components/navAdultos/NavAdultos";
import Navbar from "../../components/navbar/Navbar";
import { getAllJuegos } from "../../props";

function JuegoAdult (){
    const juegos=getAllJuegos();
    return(
        <div>
        <Header/>
        <Navbar/>
        <NavAdult />
        {juegos.map(p=>(
             <JuegoComponent
             id={p.id}
             titulo={p.titulo}
             texto={p.texto}
             desarrollox={p.desarrollox}
             articulo={p.articulo}
             descarga={p.descarga}
             foto={p.foto}
             />   
            ))}
        <Footer/>
        </div>
    );
}
export default JuegoAdult