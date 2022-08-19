import React, { useState, useEffect }from 'react'
import { RiGithubLine } from 'react-icons/ri';
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import Html from "../../assets/Ellipse 1.svg"
import Javascript from "../../assets/Ellipse 1 (1).svg"
import Css from "../../assets/Ellipse 1 (2).svg"
import './about.styles.css';

const data = [
  { id: 0, label: "javascript", image: Javascript },
  { id: 1, label: "html" , image: Html},
];

const data2 = [
  { id: 0, label: "react" },
  { id: 1, label: "styled-component" },
];

const data3 = [
  { id: 0, label: "Github" },
  { id: 1, label: "Figma" },
];

const Index = () => {
     const [isOpen, setOpen] = useState(false);
     const [isOpen2, setOpen2] = useState(false);
     const [isOpen3, setOpen3] = useState(false);
     const [items, setItem] = useState(data);
     const [items2, setItem2] = useState(data2);
     const [items3, setItem3] = useState(data3);
     const [selectedItem, setSelectedItem] = useState(null);

     const toggleDropdown = () => setOpen(!isOpen);
     const toggleDropdown2 = () => setOpen2(!isOpen2);
     const toggleDropdown3 = () => setOpen3(!isOpen3);

      const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
      };

  return (
    <section id="about" className="aboutContainer">
      <div className="about">
        <div className="aboutSelf">
          <span className="aboutHead">About MySelf</span>
          <p className="aboutPara">
            Hello I’m a software developer! I can help you build a product ,
            feature or website Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hestiate to contact me.
          </p>
          <span className="aboutCon">LET’S CONNECT</span>
          <div className="aboutIcon">
            <ImLinkedin2 />
            <RiGithubLine />
            <ImTwitter />
            <ImFacebook />
          </div>
          <div className="aboutResume">Get My Resume</div>
        </div>
        <div className="skillList">
          <div className="languages">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <span>Languages</span>
              <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
            </div>
            <div className={`dropdown-body ${isOpen && "open"}`}>
              {items.map((item) => (
                <div
                  className="dropdown-item"
                  id={item.id}
                >
                  {item.label}
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="languages">
            <div className="dropdown-header" onClick={toggleDropdown2}>
              <span>Frameworks</span>
              <i className={`fa fa-chevron-right icon ${isOpen2 && "open"}`}></i>
            </div>
            <div className={`dropdown-body ${isOpen2 && "open"}`}>
              {items2.map((item) => (
                <div
                  className="dropdown-item"
                  id={item.id}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="languages">
            <div className="dropdown-header" onClick={toggleDropdown3}>
              <span>Skills</span>
              <i className={`fa fa-chevron-right icon ${isOpen3 && "open"}`}></i>
            </div>
            <div className={`dropdown-body ${isOpen3 && "open"}`}>
              {items3.map((item) => (
                <div
                  className="dropdown-item"
                  id={item.id}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;