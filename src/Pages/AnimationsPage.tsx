import React from 'react'
import CounterElements from '../components/Animation/CounterElements/CounterElements'
import Loading from '../components/Animation/Loading/Loading'
import ListRotateGrid from '../components/Animation/ListRotateGrid/ListRotateGrid'
import ImageAppear from '../components/Animation/ImagesAppear/ImageAppear'
import ImageFromSide from '../components/Animation/ImageFromSide/ImageFromSide'
import NavBar from '../components/Shared/NavBar'

const AnimationsPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
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
      <div className='containerColumnImages'>
        <ImageFromSide/>
      </div>
    </div>
  )
}

export default AnimationsPage
