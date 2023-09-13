import Home from './home/home';
import Footer from './footer/footer';
import ProductDetailPage from './detalle_producto/detalle';
import LoginPage from './login/login';
import RegistroFormulario from './registro/registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalle_producto" element={<ProductDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registro" element={<RegistroFormulario />} />
        </Routes>
    </BrowserRouter>
  </div>

      );
}

export default App;
