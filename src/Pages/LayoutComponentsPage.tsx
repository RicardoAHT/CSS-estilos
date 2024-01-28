import React from 'react'
import Accordion from '../components/Layout/Accordion/Accordion'
import ButtonBorderColor from '../components/Layout/ButtonBorderColor/ButtonBorderColor'
import BasicHookForm from '../components/Layout/ReactHookForm/BasicHookForm'
import NavBar from '../components/Shared/NavBar'


const LayoutComponentsPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <main>
        <div className='containerColumn'>
          <Accordion/>
        </div>
        <div className='containerColumn'>
          <ButtonBorderColor/>
        </div>
        <div className='containerColumn'>
          <BasicHookForm/>
        </div>
      </main>
    </div>
  )
}

export default LayoutComponentsPage
