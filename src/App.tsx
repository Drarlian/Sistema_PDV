import './App.css'
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
