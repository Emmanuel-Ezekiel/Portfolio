import React from 'react'
import './hero.styles.css'
import Thur from '../../assets/Thur.svg'
import { ImLinkedin2 } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook } from "react-icons/im";

const index = () => {
  return (
    <section id="Home">
      <div className="container">
        <div className="socialMedia">
          <ImLinkedin2 />
          <ImGithub />
          <ImTwitter />
          <ImFacebook />
        </div>
        <div className="hero-container">
          <h1>
            Hey There. <br />
            I'm Emmmanuel Ezekiel
          </h1>
          <span>I'm a Software Developer</span>
          <p>
            I can help you build a product , feature or website Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hestiate to contact me.
          </p>
        </div>
        <div className="socialMedia2">
          <ImLinkedin2 />
          <ImGithub />
          <ImTwitter />
          <ImFacebook />
        </div>
      </div>

      <div className="hero-image">
        <img src={Thur} alt="" srcset="" />
      </div>
    </section>
  );
}

export default index