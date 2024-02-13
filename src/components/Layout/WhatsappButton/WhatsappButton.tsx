import React from 'react'

const WhatsappButton: React.FC = () => {
  return (
    <>
    <h3 className='h3'>.whatsappButton</h3>
      <a href="https://api.whatsapp.com/send?phone=573014401899" target='blank' className='whatsappButton' >
        <img src="/images/whatsapp_logo.png" alt="Logo_contacto_whatsapp" />
      </a> 
    </>
  )
}

export default WhatsappButton