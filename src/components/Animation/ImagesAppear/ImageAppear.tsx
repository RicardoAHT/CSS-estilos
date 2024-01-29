import React from 'react'

const ImageAppear: React.FC = () => {
  return (
    <section className='section'>
        <h3 className='h3'>.imageAppear</h3>
        <div className='container__imageAppear'>
            <img 
                className='imageAppear' 
                src="/images/typescript.png" 
                alt="typescript Logo" 
            />
            <img 
                className='imageAppear' 
                src="/images/typescript.png" 
                alt="typescript Logo" 
            />
            <img 
                className='imageAppear' 
                src="/images/typescript.png" 
                alt="typescript Logo" 
            />
            <img 
                className='imageAppear' 
                src="/images/typescript.png" 
                alt="typescript Logo" 
            />   
        </div>
    </section>
  )
}

export default ImageAppear
