import { Route, Routes } from 'react-router-dom'
import './App.css'
import BarraLateral from './components/BarraLateral'
import Home from './pages/Home'
import Menu from './components/Menu'
import Produto from './pages/Produto'
import { ToastContainer } from 'react-toastify';
import Rotas from './routes'

function App() {

  return (
    <div className='conteudo-todo'>
      <ToastContainer />
      {/* <Menu /> */}
      {/* <BarraLateral /> */}
      <Rotas />
    </div>
  )
}

export default App
