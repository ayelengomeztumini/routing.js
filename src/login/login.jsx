import React, { useState } from 'react';
import "./login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-page">
        <div className="menu_superior">   
                <Link style={{ textDecoration: 'none', color: 'white' }} className="home" to="/home">Home</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="productos" to="/detalle_producto">Productos</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="login" to="/login">Login</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="registro" to="/registro">Registro</Link>
            </div>
            
      <h2>Iniciar sesión</h2>

      <form id="form" onSubmit={handleSubmit}>
      <div className="formulario">

        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;
