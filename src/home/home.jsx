import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Footer from "../footer/footer";



function Home(){
    return(
        <div className="container">
            <div className="menu_superior">   
                <Link style={{ textDecoration: 'none', color: 'white' }} className="home" to="/">Home</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="productos" to="/detalle_producto">Productos</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="login" to="/login">Login</Link>
                <Link style={{ textDecoration: 'none', color: 'white' }} className="registro" to="/registro">Registro</Link>
            </div>

            <div className="titulo">
                <h2>Tabla de productos</h2>
            </div>

            <div className="table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Talles disponibles</th>
                            <th>SKU</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vestido corazones</td>
                            <td>Vestido sin mangas con corazones color violeta</td>
                            <td>XS, S, M</td>
                            <td>HPLCS-2-EB</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Solero corazones</td>
                            <td>Solero de verano, sin mangas color crema</td>
                            <td>XS, S, M</td>
                            <td>IOLCS-3-EE</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Campera Minnie</td>
                            <td>Campera de minnie, roja y negra, con capucha</td>
                            <td>XS, S, M</td>
                            <td>HPZCS-6-EM</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Polera Francia</td>
                            <td>Polera tricolor roja, blanca y azul, con cuello alto</td>
                            <td>XS, S, M, L, XL</td>
                            <td>HRJCS-5-EB</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Remera corazones</td>
                            <td>Remera con corazones color azul</td>
                            <td>XS, S</td>
                            <td>HPLCS-2-EB</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Chaleco tricolor</td>
                            <td>Chaleco puffer tricolor de abrigo</td>
                            <td>XS, S, M, L</td>
                            <td>RSLCS-2-CH</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Medias</td>
                            <td>Medias antideslizantes para interior u exterior con abrigo</td>
                            <td>XS, S, M, L, XL</td>
                            <td>RETQS-2-CH</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Vestido Navidad Rojo</td>
                            <td>Vestido estilo navideño rojo y blanco con volados</td>
                            <td>XS, S</td>
                            <td>RRRTS-2-CH</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Vestido Navideño Verde</td>
                            <td>Vestido estilo navideño verde, blanco y rojo con volados</td>
                            <td>XS, S</td>
                            <td>RQWYS-2-CH</td>
                        </tr>
                    </tbody>
                </Table>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home;