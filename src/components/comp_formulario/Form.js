import "./Form.css"
import { useState } from 'react';
function Formulario(){
    const [ isOpenForm, setIsOpenForm ] =useState(false);
    const closeForm=()=>{
        setIsOpenForm (false);
    }
    return(
        <main className="body-form">
            <h1>Llena este formulario y te contactamos</h1>
        <form>
            <label>Nombre</label>
            <input 
            name="nombre"
            placeholder="Colectivo, Fundación o Colegio"
            ></input>
            <label>Representante</label>
            <input 
            name="representante"
            placeholder="Escribe tu nombre"
            ></input>
            <label>Correo</label>
            <input 
            name="correo"
            placeholder="Correo electrónico"
            ></input>
            <label>Número de télefono</label>
            <input 
            name="telefono"
            placeholder="Escribe un número de contacto"
            ></input>
            <label>Mensaje</label>
            <input 
            name="mensaje"
            placeholder="Déjanos tu mensaje"
            ></input>
			<label className="check">
				Recuerda que al enviar el formulario aceptas los Términos y Condiciones.
			</label>
            <button type="submit">Enviar</button>
            <div className="cerrar" onClick={closeForm}><button >Cerrar</button>{isOpenForm && <Formulario />}</div>
            
        </form>
        </main>
    );
}
export default Formulario