import React from 'react'
import { Link } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <nav className='nav'>
      <ul className='nav__ul'>
        <li className='nav__ul__li'>
            <Link to={"/"}>
              <i className="fa-solid fa-house"></i>
            </Link>  
        </li>
        <li className='nav__ul__li'>
            <Link to={"/animations"}>
              <i className="fa-solid fa-gamepad"></i>
            </Link>
        </li>
        <li className='nav__ul__li'>
            <Link to={"/layouts"}>
              <i className="fa-solid fa-layer-group"></i>
            </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
