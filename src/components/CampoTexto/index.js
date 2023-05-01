import { useState } from "react"
import "./CampoText.css"

const CampoText = (props) => {
    const [valor, actualizarValor] = useState("")
    const placeholderModificado = `${props.placeholder} ...`
    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={manejarCambio}
        
        />
    </div>
}

export default CampoText;