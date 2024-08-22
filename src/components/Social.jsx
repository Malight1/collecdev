import React from 'react'
import "../navbar.css"
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Social = () => {
  return (
    <div className="soc">
        <a href="https://t.me/wizdomia" target='_blank'>
        <FaTelegramPlane />
        </a>
        <a href="https://x.com/wizdomiaerc" target='_blank'>
        <FaXTwitter />
        </a>
            
    </div>
  )
}

export default Social