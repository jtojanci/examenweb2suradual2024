import React from 'react'
import ReactDOM from 'react-dom/client'
//Se eliminan los dos import que no están relacionados
//import App from './App.jsx'
//import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Home } from './Home/Home.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home>

    </Home>
    
  </React.StrictMode>,
)
