import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/formulario/Form';
import MiOrg from './components/MiOrg';
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  //Ternario ---> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div className="App">
      <Header/>
      {mostrarFormulario && <Form/>}
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
