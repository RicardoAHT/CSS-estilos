import React from 'react'

const CounterElements: React.FC  = () => {
  return (
    <>
      <h3 className='h3'>.counterElement</h3>
      <div >
        <div className='iconContainer'>
          <i className="fa-solid fa-cart-shopping icon"></i>
            <div  className='counter'>
              <p>100</p>
            </div>
        </div >
      </div>
    </>
  )
}

export default CounterElements
