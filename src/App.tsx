import React from 'react'
import ButtonBorderColor from './components/ButtonBorderColor/ButtonBorderColor'
import ImageAppear from './components/ImagesAppear/ImageAppear'
import ListRotateGrid from "./components/ListRotateGrid/ListRotateGrid"
import Loading from "./components/Loading/Loading"
import CounterElements from './components/CounterElements/CounterElements'
import BasicHookForm from './components/ReactHookForm/BasicHookForm'

const App = () => {
  return (
    <div className='app'>
      <div className='containerColumn'>
        <ButtonBorderColor/>
      </div>
      <div className='containerColumn'>
        <BasicHookForm/>
      </div>
      <div className='containerColumn'>
        <h2>.counterElement</h2>
        <CounterElements/>
      </div>
      <div className='containerColumn'>
        <Loading/>
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
