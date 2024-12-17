import "../styles/Galeria.css";
import ufcimg from "../imagenes/ufc.jpg";
import boximg from "../imagenes/images.jpg";

function Galeria() {
  return (
    <div>
      {/* Galeria de deportes favoritos */}
      <section className="section">
        <h2>Galeria de Deportes Favoritos</h2>
        <div className="galeria">
          <div className="galeria_item">
            <img src="./assets/bmx.jpg" />
            <p>BMX</p>
          </div>
          <div className="galeria_item">
            <img src={ufcimg} />
            <p>UFC</p>
          </div>
          <div className="galeria_item">
            <img src="./assets/fut.jpg" />
            <p>FUTBOL</p>
          </div>
          <div className="galeria_item">
            <img src={boximg} />
            <p>BOX</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Galeria;
