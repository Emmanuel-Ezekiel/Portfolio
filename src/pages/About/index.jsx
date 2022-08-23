import React, { useState, useEffect }from 'react';
import { RiGithubLine } from 'react-icons/ri';
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import Html from "../../assets/Ellipse 1.svg"
import Javascript from "../../assets/Ellipse 1 (1).svg";
import Css from "../../assets/Ellipse 1 (2).svg";
import Node from "../../assets/node-js.png";
import react from "../../assets/physics.png";
import Sass from "../../assets/sass.png";
import Typescript from "../../assets/typescript.png";
import Next from "../../assets/next.png";
import Git from "../../assets/git.png";
import Github from "../../assets/github.png";
import Tailwind from "../../assets/tail.png";
import Mobile from "../../assets/react native.png";
import Figma from "../../assets/figma.png";

import { IoIosArrowDropdown } from "react-icons/io";

import './about.styles.css';
import MyFile from "../../assets/Emmanuel_frontDev.pdf";

const data = [
  { id: 0, label: "Javascript", image: Javascript },
  { id: 1, label: "Html" , image: Html},
  { id: 2, label: "Css" , image: Css},
  { id: 3, label: "Node js" , image: Node},
];

const data2 = [
  { id: 0, label: "React", image: react },
  { id: 1, label: "Sass", image: Sass },
  { id: 2, label: "Typescript", image: Typescript },
  { id: 3, label: "Next Js", image: Next },
  { id: 4, label: "Native", image: Mobile },
  { id: 5, label: "Tailwind", image: Tailwind },
];

const data3 = [
  { id: 0, label: "Github", image: Github },
  { id: 1, label: "Git", image: Git },
  { id: 2, label: "Figma", image: Figma },
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
    <section id="About" className="aboutContainer">
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
            <a
              href="https://www.linkedin.com/in/emmanuel-ezekiel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin2 />
            </a>
            <a
              href="https://www.github.com/emmanuel-ezekiel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubLine />
            </a>
            <a
              href="https://twitter.com/Rungee_Codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImTwitter />
            </a>
            <a
              href="https://www.facebook.com/emamex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFacebook />
            </a>
          </div>
          <a
            href={MyFile}
            download="Emmanuel_frontDev.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="aboutResume">Get My Resume</div>
          </a>
        </div>
        <div className="skillList">
          <div className="languages">
            <div className="dropdown-header" onClick={toggleDropdown}>
              <span>Languages</span>
              <IoIosArrowDropdown className={` icon ${isOpen && "open"}`} />
            </div>
            <div className={`dropdown-body ${isOpen && "open"}`}>
              {items.map((item) => (
                <div className="dropdown-item" id={item.id}>
                  <img src={item.image} alt="" />
                  <span className="itemName">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="languages">
            <div className="dropdown-header" onClick={toggleDropdown2}>
              <span>Frameworks</span>
              <IoIosArrowDropdown className={` icon ${isOpen2 && "open"}`} />
            </div>
            <div className={`dropdown-body ${isOpen2 && "open"}`}>
              {items2.map((item) => (
                <div className="dropdown-item" id={item.id}>
                  <img src={item.image} alt="" />
                  <span className="itemName">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="languages">
            <div className="dropdown-header" onClick={toggleDropdown3}>
              <span>Skills</span>
              <IoIosArrowDropdown className={` icon ${isOpen3 && "open"}`} />
            </div>
            <div className={`dropdown-body ${isOpen3 && "open"}`}>
              {items3.map((item) => (
                <div className="dropdown-item" id={item.id}>
                  <img src={item.image} alt="" />
                  <span className="itemName">{item.label}</span>
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