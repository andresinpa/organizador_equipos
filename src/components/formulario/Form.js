import { useState } from "react";
import "./Form.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../../ListaOpciones";
import Boton from "../Boton";

const Form = () => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)
       let datosAEnviar = {
        nombre, 
        puesto,
        foto,
        equipo
       }
       console.log(datosAEnviar)
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre}    
            />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto"  
                required valor={puesto}
                actualizarValor={actualizarPuesto}

            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required valor={foto}
                actualizarFoto={actualizarFoto}

            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
            />
            <Boton>
                Crear
                  
            </Boton>
        </form>
    </section>

}

export default Form;
