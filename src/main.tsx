import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./App.css"
/*! Animations */
import "./components/Animation/CounterElements/counterElements.css"
import "./components/Animation/ImageFromSide/imageFromSide.css"
import "./components/Animation/ImagesAppear/imageAppear.css"
import "./components/Animation/ListRotateGrid/listRotateGrid.css"
import "./components/Animation/Loading/loading.css"
/*! Layouts */
import "./components/Layout/Accordion/accordion.css"
import "./components/Layout/ButtonBorderColor/buttonBorderColor.css"
/*! Paginas */
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </HashRouter>
)
