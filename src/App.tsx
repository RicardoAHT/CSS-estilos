import React from 'react'
import ButtonBorderColor from './components/ButtonBorderColor/buttonBorderColor'
import ImageAppear from './components/ImagesAppear/imageAppear'

const App = () => {
  return (
    <div className='app'>
      <div className='containerColumn'>
        <ButtonBorderColor/>
      </div>
      <div className='containerColumnImages'>
        <ImageAppear/>
      </div>
      <footer className='footer'></footer>
    </div>
  )
}

export default App
