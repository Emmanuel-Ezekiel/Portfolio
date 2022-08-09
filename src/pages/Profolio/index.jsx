import React from 'react';
import './portfolio.styles.css';
import Data from './data';
import { NavItem } from 'react-bootstrap';



const index = () => {

  return (
    <section id="Portfolio" className="PortContainer">
      <div className="workContainer">

        <div className="recentWork">
          <span className='work'>My Recent Works</span>
          <div className="line"></div>
        </div>
        
        <div className='FeaturedWork'>
         {Data.map((item, index) => (
              <div key={index} className="imgFeatured">
                <div className='imgContainer'>
                  <img src="" alt="" srcset="" />
                </div>
                <div className='rightBlock'>
                  <span className='name'>{item.name}</span> 
                  <p className='desc'>{item.description}</p>
                  <div className='tech'>
                    {
                      item.tech.map((item) => (
                        <span className='techSkill'>{item}</span>
                      ))
                    }
                  </div>
                  <span className='button'>see project</span>
                </div>
              </div>
            ))
         }
        </div>


      </div>
    </section>
  );
}

export default index