import React from 'react'
import ButtonBorderColor from './components/ButtonBorderColor/ButtonBorderColor'
import ImageAppear from './components/ImagesAppear/ImageAppear'
import ListRotateGrid from "./components/ListRotateGrid/ListRotateGrid"

const App = () => {
  return (
    <div className='app'>
      <div className='containerColumn'>
        <ButtonBorderColor/>
      </div>
      <div className='containerColumnImages'>
        <ListRotateGrid/>
      </div>
      <div className='containerColumnImages'>
        <ImageAppear/>
      </div>
      <footer className='footer'></footer>
    </div>
  )
}

export default App
