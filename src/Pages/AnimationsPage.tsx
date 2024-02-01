import React from 'react'
import CounterElements from '../components/Animation/CounterElements/CounterElements'
import Loading from '../components/Animation/Loading/Loading'
import ListRotateGrid from '../components/Animation/ListRotateGrid/ListRotateGrid'
import ImageAppear from '../components/Animation/ImagesAppear/ImageAppear'
import ImageFromSide from '../components/Animation/ImageFromSide/ImageFromSide'
import NavBar from '../components/Shared/NavBar'
import ImagesGalery from '../components/Animation/ImagesGalery/ImagesGalery'

const AnimationsPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <main className='main'>
        <div className='containerColumn'>
          <CounterElements/>
        </div>
        <div className='containerColumn'>
          <Loading/>
        </div>
        <div className='containerColumn'>
          <ListRotateGrid/>
        </div>
        <div className='containerColumn'>
          <ImageAppear/>
        </div>
        <div className='containerColumn'>
          <ImageFromSide/>
        </div>
        <div className='containerColumn'>
          <ImagesGalery/>
        </div>
      </main>
    </div>
  )
}

export default AnimationsPage
