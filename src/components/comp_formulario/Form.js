import "./Form.css"
function Formulario(){
    return(
        <main className="body-form">
            <h1>Llena este formulario y te contactamos</h1>
        <form>
            <label>Nombre</label>
            <input 
            name="nombre"
            placeholder="colectivo, fundación o colegio"
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
				Recuerda que al enviar el formulario aceptas los Terminos y Condiciones
			</label>
            <button type="submit">Enviar</button>
        </form>
        </main>
    );
}
export default Formulario