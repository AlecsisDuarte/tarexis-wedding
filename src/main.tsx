import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import std from './assets/std.png'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <BrowserRouter basename={"/tarexis-wedding/"}>
    <div>
        <div className="std-main">
         <img src={std}></img>
        </div>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  )