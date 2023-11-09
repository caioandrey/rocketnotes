// Importações do projeto
import React from 'react'
import ReactDOM from 'react-dom/client' // Manipular elementos que fazem parte da DOM
import { Details } from './pages/Details/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>,
)

