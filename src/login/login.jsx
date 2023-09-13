import React, { useState } from 'react';
import "./login.css";
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className="login-page">
        <div className="menu_superior">   
                <Link style={{ textDecoration: 'none', color: 'white' }} className="home" to="/">Home</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="productos" to="/detalle_producto">Productos</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="login" to="/login">Login</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="registro" to="/registro">Registro</Link>
            </div>
            
      <h2>Iniciar sesión</h2>

      <form id="form" onSubmit={handleSubmit}>
      <div className="formulario">

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
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
    <Footer></Footer>
    </div>
  );
};

export default LoginPage;
