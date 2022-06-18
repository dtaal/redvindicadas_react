import React, {useState} from 'react';
import {Formulario,Label,ContenedorTerminos,ContenedorBotonCentrado,Boton,MensajeExito,MensajeError} from '../../elements/FormAsociados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import Inputform from '../../components/input-form/InputForm';
import './FormAsociad.css';
import {Link} from 'react-router-dom'
function FormAsociado(){

    const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [representante, cambiarRepresentante] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
    const [mensaje, cambiarMensaje] = useState({campo: '', valido: null});
	const [terminos,cambiarTerminos]= useState(false);
	const [formularioValido,cambiarFormularioValido]= useState(null); 
    const [ isOpenForm, setIsOpenForm ] =useState(false); 
    const closeForm=()=>{
        setIsOpenForm (false);}

  const expresiones = {
        nombre: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        representante: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,10}$/ // 7 a 10 numeros.
	}


const onChangeTerminos=(e)=>{
cambiarTerminos(e.target.checked);
}

const onSubmit = (e) => {
	e.preventDefault();

	if(
        nombre.valido === 'true' &&
		representante.valido === 'true' &&
		correo.valido === 'true' &&
		telefono.valido === 'true' &&
		terminos
	){
		cambiarFormularioValido(true);
        cambiarNombre({campo: '', valido: null});
		cambiarRepresentante({campo: '', valido: ''});
		cambiarCorreo({campo: '', valido: null});
		cambiarTelefono({campo: '', valido: null});
        cambiarMensaje({campo: '', valido: null});

	} else {
		cambiarFormularioValido(false);
	}
    }
    return(
        <main className="body-form">

        <h1>Llena este formulario y te contactamos</h1>

	    <section className='exe-form'>
        <Formulario action="" onSubmit={onSubmit}>

        <Inputform
            estado={nombre}
            cambiarEstado={cambiarNombre}
            tipo="text"
            label="Nombre"
            placeholder="Colectivo, fundación o colegio"
            name="nombre"
            leyendaError="El nombre tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
            expresionRegular={expresiones.nombre}
	    />
       
        <Inputform
            estado={representante}
            cambiarEstado={cambiarRepresentante}
            tipo="text"
            label="Representante"
            placeholder="Escribe tu nombre como representante"
            name="representante"
            leyendaError="El representante solo puede contener letras y espacios."
            expresionRegular={expresiones.representante}
	    />

		<Inputform
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="email"
            label="Correo Electrónico"
            placeholder="Correo electrónico"
            name="correo"
            leyendaError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
            expresionRegular={expresiones.correo}
		/>
		<Inputform
            estado={telefono}
            cambiarEstado={cambiarTelefono}
            tipo="text"
            label="Teléfono"
            placeholder="Escribe un número de contacto"
            name="telefono"
            leyendaError="El telefono solo puede contener numeros y el maximo son 10 dígitos."
            expresionRegular={expresiones.telefono}
		/>

        <Inputform
            estado={mensaje}
            cambiarEstado={cambiarMensaje}
            tipo="textarea"
            label="Mensaje"
            placeholder="Déjanos tu mensaje"
            name="mensaje"
		/>

        <ContenedorTerminos>
            <Label>
                <input 
                    type="checkbox" 
                    name="terminos" 
                    id="terminos" 
                    checked={terminos}
                    onChange={onChangeTerminos}
                />
                Recuerda que al enviar el formulario aceptas los Terminos y Condiciones
            </Label>
        </ContenedorTerminos>
        {formularioValido===false && <MensajeError>
        
          <FontAwesomeIcon icon={faExclamationTriangle}/>
          <b>Error</b>
 
        </MensajeError>}
        <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
		    {formularioValido === true && <MensajeExito>Formulario enviado exitosamente!</MensajeExito>}
        </ContenedorBotonCentrado>
        <div className="cerrar-btn"><button><Link to ={{
            pathname:"/redv-pers/asociados/1"
        }
        }>Cerrar</Link></button></div>
         </Formulario>

	  </section>
            

    </main>
    
    
    );
}
export default FormAsociado;