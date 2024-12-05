import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import { ProductosPage } from '../rentar/productos/ProductosPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rentar' element={<ProductosPage/>}/>
    </Routes>
  );
};
