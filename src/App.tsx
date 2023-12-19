import { Route, Routes } from 'react-router-dom'
import './App.css'
import BarraLateral from './components/BarraLateral'
import Home from './components/Home'
import Menu from './components/Menu'

function App() {

  return (
    <div className='conteudo-todo'>
      <Menu />
      <BarraLateral />
      <Routes>
        <Route path='/' Component={Home}></Route>
      </Routes>
    </div>
  )
}

export default App
