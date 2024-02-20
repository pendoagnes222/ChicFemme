import { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "../Navbar/Navbar.css"

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  return (
    <div>
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
          <a href='/#'>Home</a>
          <a href='/#'>New In</a>
          <a href='/#'>Brands</a>
          <a href='/#'>About Us</a>
          <a>
            <button>shop now</button>
          </a>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
        <FaTimes />
      </button>
        </nav>

        <button className='nav-btn' onClick={showNavbar}>
        <FaBars />
      </button>
      </header>
      
    </div>
  )
}

export default Navbar
