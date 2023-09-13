import React, { useState } from 'react';
import "./registro.css";
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

function RegistroFormulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar las acciones necesarias con los datos del formulario, como enviarlos a un servidor.
    console.log('Datos enviados:', { nombre, apellido, email, contraseña });
  };

  return (
    <div className="container">

        <div className="menu_superior">   
            <Link style={{ textDecoration: 'none', color: 'white' }} className="home" to="/">Home</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} className="productos" to="/detalle_producto">Productos</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} className="login" to="/login">Login</Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} className="registro" to="/registro">Registro</Link>
        </div>

        <h2>Formulario de registro</h2>
    
    <form id="form" onSubmit={handleSubmit}>
        <div className="formulario">
            
        <div>
            <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required/>
        </div>
      
        <div>
            <label htmlFor="apellido">Apellido</label>
                <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required/>
        </div>
      
        <div>
            <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
        </div>
      
        <div>
            <label htmlFor="contraseña">Contraseña</label>
                <input
                type="password"
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required/>
        </div>
      </div>
      <button type="submit">Registrarse</button>
    </form>
    <Footer></Footer>
    </div>
  );
}

export default RegistroFormulario;
