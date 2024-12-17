import Encabezado from "./components/Encabezado";
import Personal from "./components/Infopersonal";
import Estudios from "./components/Estudiios";
import Herramientas from "./components/Herramientas";
import Galeria from "./components/Galeria";
import './styles/Estilolistas.css'
// import "./App.css";

function App() {
  return (
    <div className="body">
      <Encabezado />
      <Personal />
      <Estudios />
      <Herramientas />
      <Galeria />
    </div>
  );
}

export default App;

