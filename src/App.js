import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/formulario/Form';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import { v4 as uuid} from "uuid";


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Móvil",
    foto: "https://github.com/andresinpa.png",
    nombre: "Jesús Infante",
    puesto: "Instructor",
    fav: true

  },
  { 
    id: uuid(),
    equipo: "Front End", 
    foto: "https://github.com/harlandlohora.png", 
    nombre: "Harland Lohora", 
    puesto: "Instructor",
    fav: false 
  }, 
  { 
    id: uuid(),
    equipo: "Programación", 
    foto: "https://github.com/genesysaluralatam.png", 
    nombre: "Genesys Rondon", 
    puesto: "Desarrolladora de software e instructora",
    fav: true 
  },
  { 
    id: uuid(),
    equipo: "UX y Diseño", 
    foto: "https://github.com/JeanmarieAluraLatam.png", 
    nombre: "Jeanmarie Quijada", 
    puesto: "Instructora en Alura Latam", 
    fav: false
  }, 
  { 
    equipo: "Programación", 
    foto: "https://github.com/christianpva.png", 
    nombre: "Christian Velasco", 
    puesto: "Head de Alura e Instructor",
    fav: false
  }, 
  { 
    id: uuid(),
    equipo: "Innovación y Gestión", 
    foto: "https://github.com/JoseDarioGonzalezCha.png", 
    nombre: "Jose Gonzalez", 
    puesto: "Dev FullStack", 
    fav: false
  }])

  const [equipos, actualizarEquipos] = useState([
      //Lista de equipos
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#D9F7E9"

    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"

    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"

    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"

    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"

    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"

    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"

    }

  ])

  //Ternario ---> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    console.log(nuevosColaboradores)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
      
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    const colaboraddoresActualizador = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador 
    })
    actualizarColaboradores(colaboraddoresActualizador)
  }

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Form equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo = {crearEquipo}
      />}

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.id}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
        />)

      }

      <Footer />

    </div>
  );
}

export default App;
