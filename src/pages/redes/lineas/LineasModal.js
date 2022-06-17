import { getV } from "../../oportunidades/estudios"
import './lineasmodal.css'
function Violencia (){
    const violencias = getV();
    return(
        <main className="container-modal">
        <div className="modal-container"> 
            {violencias.map(v=>( 
            <div key={v.id} className="modal">
                <ul>
                    <li>{v.v1}</li>
                    <li>{v.v2}</li>
                    <li>{v.v3}</li>
                    <li>{v.v4}</li>
                </ul>
                <button>Volver</button>
            </div>
            
            ))
        }
    </div>
    </main>
    );
}

export default Violencia;