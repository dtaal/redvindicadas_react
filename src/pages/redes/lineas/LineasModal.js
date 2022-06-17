import { getV } from "../../oportunidades/estudios"
import './lineasmodal.css'
function Violencia (){
    return(
        <main className="container-modal">
        <div className="modal-container"> 
            <div className="modal">
            <h1>Violencia Económica</h1>
                <ul>      
        <li>Tiene acceso a todas tus cuentas financieras y documentos de identidad.</li>
        <li>Limita tu dinero y lo que puedes hacer con él.</li>
        <li>Saca préstamos, créditos, tarjetas, etc, a tu nombre sin tu consetimiento.</li>
        <li>Te impide trabajar y/o ganar dinero por tu cuenta"</li>
                </ul>
                <button className="back_lineas">Volver</button>
            </div>
            
    </div>
    </main>
    );
}

export default Violencia;