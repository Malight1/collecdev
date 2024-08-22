import React from 'react'
import logo from "../assets/logo.jpeg"
import "../navbar.css"


const Navbar = () => {
  return (
   <div className="navbarr">
    <div className='log'>
      <img src={logo} alt="" />
      <h3>Wizdomia</h3>
    </div>



    <div className="links">
        <a href="">Home</a>
        <a href="https://wizdomia.gitbook.io/wizdomia-docs/">Whitepaper</a>
    </div>
   </div>
  )
}

export default Navbar