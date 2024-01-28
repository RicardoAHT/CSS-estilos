import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AnimationsPage from './Pages/AnimationsPage'
import LayoutComponents from './Pages/LayoutComponentsPage'


const App: React.FC = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/animations' element={<AnimationsPage/>}/>
        <Route path='/layouts' element={<LayoutComponents/>}/>
      </Routes>
      <footer className='footer'>Footer</footer>
    </div>
  )
}

export default App
