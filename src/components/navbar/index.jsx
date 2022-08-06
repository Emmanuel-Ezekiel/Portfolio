import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Menu from '../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'
import Cancel from '../../assets/close_FILL0_wght400_GRAD0_opsz48.svg'
import Mail from '../../assets/mail_FILL0_wght400_GRAD0_opsz48.svg'
import menuItems from "./NavItems";
import "./Navbar.css";

import Group from "../../assets/Group 98.svg"
import Mask from "../../assets/Mask Group.svg"

const Index = () => {

       const [isOpen, setIsOpen] = useState(false);


  return (
    <header>
      <div className="Navbar">
        <span className="nav-logo">Emmanuel Ezekiel</span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <div className="cancel">
            <img
              src={Cancel}
              alt="menu"
              srcset=""
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <div className="list">
            <a href="/home">Portfolio</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <img src={Group} alt="" srcset="" className='group' />
          <img src={Mask} alt="" srcset="" className='mask' />
        </div>

        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={Menu} alt="menu" srcset="" />
        </div>
      </div>
    </header>
  );
}

export default Index;