import React, { useState } from 'react';
import './detalle.css';
import campera2 from './campera2.JPG'
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

const ProductDetailPage = () => {
  const [isPurchased, setIsPurchased] = useState(false);

  const handleBuyClick = () => {
    setIsPurchased(true);
  };

  return (
    <div className= "detalle">
        <div className="menu_superior">   
                <Link style={{ textDecoration: 'none', color: 'white' }} className="home" to="/">Home</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="productos" to="/detalle_producto">Productos</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="login" to="/login">Login</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="registro" to="/registro">Registro</Link>
            </div>

            
        <div className="contenedor_imagen">
            <h1>Detalles Producto</h1>
        </div>
      
        <div className="product-detail">

        <aside className="product-image">
          <img src={campera2} className='campera2' alt="Producto" />
        </aside>

      <main className="product-info">
        <h2>Chaleco Puff Tricolor</h2>
        <p>Chaleco puffer, impermeable, rompe vientos con botones en la panza para un mejor cierre.</p>
        <p>Precio: $10.000</p>
        <p>SKU: ABC123</p>
        <p>Cantidad disponible: 10</p>
        <button onClick={handleBuyClick}><b>Comprar</b></button>
        {isPurchased && <p className="purchase-message">Gracias por su compra</p>}
      </main>

      </div>
    <Footer></Footer>
    </div>
  );
};

export default ProductDetailPage;
