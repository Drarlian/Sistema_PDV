import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { InfosProvider } from './contexts/InfosContext.tsx'
import { HashRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InfosProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </InfosProvider>
  </React.StrictMode>,
)
