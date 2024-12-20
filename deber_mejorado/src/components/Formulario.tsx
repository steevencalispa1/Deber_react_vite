import React, { useState } from 'react';

const FormularioRegistro = () => {
  // Estados para manejar los valores de cada campo
  const [nombre, setNombre] = useState(''); 
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState(''); // Estado para mostrar el mensaje final
  const [creditos, setCreditos] = useState('');
  const [docente, setDocente] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    setMensaje(
      `¡Gracias, ${nombre}!\nTus datos han sido registrados.\nMateria: ${materia}\nFecha: ${fecha}`
    ); // genera un mensaje donde extrae lo que se escribio y lo imprimero con el objeto
  };

  return (
    <div>
      <h2>Registro de Estudiante</h2> {/* titulo general*/}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Campo de nombre */}
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
          /> {/*aqui genera un input donde se va ingresar la info del nombren le para un indica que va ser tipo texto, valua el el objeto nombre,luego se dipara el onchange que contiene los metodos de  el valor actual de lo q se escribio y set actualuiza el valor esta metodolgia se ejecuta en todos los valores */}
        </label>

        {/* Campo de correo */}
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
          />
        </label>

        {/* Campo de carrera */}
        <label>
          Carrera:
          <input
            type="text"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            placeholder="Ingresa tu carrera"
          />
        </label>

        {/* Campo de materia */}
        <label>
          Materia:
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
          />
        </label>

        {/* Campo de fecha */}
        <label>
          Fecha de inscripción:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </label>

        {/* numero de ccreditos*/}
        <label>
          Numero de creditos:
          <input
            value={creditos}
            onChange={(e) => setCreditos(e.target.value)}
            placeholder="Numero de creditos"
          />
        </label>

        {/* docente*/}
        <label>
          Docente:
          <input
            type="text"
            value={docente}
            onChange={(e) => setCreditos(e.target.value)}
            placeholder="Docente"
          />
        </label>

        {/* Botón de envío */}
        <button type="submit">Registrar</button> {/* boton q usa para que imprima los valores que se escriben el los label */}
      </form>

      {/* Mensaje de confirmación */} 
      {mensaje && (
        <div
          style={{
            marginTop: '20px',
            color: 'green',
            whiteSpace: 'pre-line',
          }}
        >
          {mensaje}
        </div>
      )}
    </div>
  );
};

export default FormularioRegistro;