import { Route, Routes } from 'react-router-dom'
import './App.css'
import BarraLateral from './components/BarraLateral'
import Home from './components/Home'
import Menu from './components/Menu'
import Produto from './components/Produto'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className='conteudo-todo'>
      <ToastContainer />
      <Menu />
      <BarraLateral />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/produto' Component={Produto}></Route>
      </Routes>
    </div>
  )
}

export default App
