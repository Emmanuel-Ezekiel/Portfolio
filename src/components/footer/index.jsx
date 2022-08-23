import React from 'react';
import Image1 from '../../assets/image-geometry_6.svg';
import Image2 from '../../assets/image-geometry_7.svg';
import Image3 from '../../assets/image_geometry_1.svg';
import './footer.styles.css';
import { FiDownload } from 'react-icons/fi';
import { ImLinkedin2 } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { useForm, ValidationError } from "@formspree/react";
import MyFile from "../../assets/Emmanuel_frontDev.pdf";

const Index = () => {

  const [state, handleSubmit] = useForm("mjvzvnzk");
  if (state.succeeded) {
    return <p style={{ margin: "0 400px", color: "#091E42", fontWeight: "700", fontSize: "40px"}}>Message Sent Successfully</p>;
  }

  return (
    <>
      <div className="footerContainer" id="Contact">
        <img src={Image1} alt="" className="image_gemo" />
        <img src={Image3} alt="" className="image_gemo3" />
        <div className="footer-form">
          <span className="form-header">Contact Me</span>
          <p className="form-description">
            If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it. 
          </p>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form1">
                <div className="form-info">
                  <label htmlFor="name">Your Name</label>
                  <input type="name" id="name" name="name" />{" "}
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="form-info">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" />{" "}
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="form2">
                <div className="form-info2">
                  <label htmlFor="">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter Your Message Here"
                  ></textarea>
                </div>
              </div>
              <button type="submit" disabled={state.submitting}>
                Get In Touch
              </button>
            </form>
          </div>
        </div>
        <img src={Image2} alt="" className="image_gemo2" />
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <a
            href={MyFile}
            download="Emmanuel_frontDev.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="download">
              <span>Get My Resume</span> <FiDownload className="media1" />
            </div>
          </a>
          <div className="Icons">
            <a
              href="https://www.linkedin.com/in/emmanuel-ezekiel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImLinkedin2  className="media"/>
            </a>
            <a
              href="https://www.github.com/emmanuel-ezekiel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub  className="media"/>
            </a>
            <a
              href="https://twitter.com/Rungee_Codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImTwitter  className="media"/>
            </a>
            <a
              href="https://www.facebook.com/emamex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFacebook  className="media"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;