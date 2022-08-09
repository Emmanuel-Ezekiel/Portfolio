import React, { useState } from 'react';
import Menu from '../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg';
import Cancel from '../../assets/close_FILL0_wght400_GRAD0_opsz48.svg';
import "./Navbar.css";
import Group from "../../assets/Group 98.svg";
import Mask from "../../assets/Mask Group.svg";
import ScrollTo from "react-scroll-into-view";

const Index = () => {

 const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="Navbar">
        <ScrollTo selector="Home">
          <span className="nav-logo">Emmanuel Ezekiel</span>
        </ScrollTo>
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
            <ScrollTo selector="Portfolio" className="scroll">
              <div className="por">Portfolio</div>
            </ScrollTo>
            <ScrollTo selector="About" className="scroll">
              <div  className="por">About</div>
            </ScrollTo>
            <ScrollTo selector="Contact" className="scroll">
              <div  className="por">Contact</div>
            </ScrollTo>
          </div>

          <img src={Group} alt="" srcset="" className="group" />
          <img src={Mask} alt="" srcset="" className="mask" />
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