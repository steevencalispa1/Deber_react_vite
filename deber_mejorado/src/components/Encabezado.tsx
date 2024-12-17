import logo from "../assets/react.svg";
import "../styles/Encabezado.css";

function Encabezado() {
  return (
    <div className="app_container">
      <div className="container">
        <h1 className="title">Tarea 1 - React</h1>
        <img src={logo} />
        <img src="./vite.svg" />
      </div>
    </div>
  );
}

export default Encabezado;
