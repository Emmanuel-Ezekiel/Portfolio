import React from 'react';
import Image1 from '../../assets/image-geometry_6.svg';
import Image2 from '../../assets/image-geometry_7.svg';
import './footer.styles.css';

const Index = () => {
  return (
    <>
      <div className="footerContainer">
        <img src={Image1} alt="" className="image_gemo" />
        <div className="footer-form">
          <span className="form-header">Get Started</span>
          <p className="form-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="form">
            <form action="">
              <div className="form1">
                <div className='form-info'>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name"/>{" "}
                </div>
                <div className='form-info'>
                  <label htmlFor="email">Your Email</label>
                  <input type="text" id="email" name="email"/>{" "}
                </div>
              </div>
              <div className="form2">
                <div className='form-info2'>
                  <label htmlFor="">message</label>
                  <textarea name="" id="" cols="30" rows="10"  placeholder="Enter Your Message Here"></textarea>
                </div>
              </div>
            </form>
            <button>Start Collaboration</button>
          </div>
        </div>
        <img src={Image2} alt="" className="image_gemo2" />
      </div>
      <div className="footer-bottom"></div>
    </>
  );
}

export default Index;