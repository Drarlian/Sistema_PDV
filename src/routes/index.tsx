import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AuthRouter from '../components/AuthRouter';
import Produto from '../pages/Produto';
import Layout from '../components/Layout';
import RegistroProdutos from '../pages/RegistroProdutos';
import { AuthContext } from '../contexts/AuthContext';
import Login from '../pages/Login';
import { InfosContext } from '../contexts/InfosContext';

const Rotas: React.FC = () => {
  const data = useContext(AuthContext)
  const { produtoAtual } = useContext(InfosContext);
  
  return (
   <Routes>
        <Route path='/' element={data.user?.role === 'SELLER' ? <AuthRouter><Layout><Home /></Layout></AuthRouter>: data.user?.role === 'ADMIN' ? <AuthRouter><Layout><RegistroProdutos /></Layout></AuthRouter>: <Login />} />
        <Route path='/produto' element={(data.user?.role === 'SELLER' && !Number.isNaN(produtoAtual?.codigo)) ? <AuthRouter><Layout><Produto /></Layout></AuthRouter>: data.user?.role === 'SELLER'? <AuthRouter><Layout><Home /></Layout></AuthRouter>: data.user?.role === 'ADMIN' ? <AuthRouter><Layout><RegistroProdutos /></Layout></AuthRouter>: <Login />} />
        <Route path='/produtos' element={data.user?.role === 'ADMIN' ? <AuthRouter><Layout><RegistroProdutos /></Layout></AuthRouter>: data.user?.role === 'SELLER' ? <AuthRouter><Layout><Home /></Layout></AuthRouter>: <Login />} />
   </Routes>
 );
}

export default Rotas;