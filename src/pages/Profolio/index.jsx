import React, { useState } from 'react';
import './portfolio.styles.css';
import Data from './data';
import Modal from '../../components/modal/modal';



const Index = () => {

  const [ openModal, setOpenModal ] = useState(false);
  const [selectedData, setSelectedData] = useState();

   const hanldeClick = (selectedId) => {
    const selectedRec = Data.find((val) => val.id === selectedId);
    console.log(selectedRec);
    setSelectedData([selectedRec]);
  };



  return (
    <section id="Portfolio" className="PortContainer">
      <div className="workContainer">
        <div className="recentWork">
          <span className="work">My Recent Works</span>
          <div className="line"></div>
        </div>

        <div className="FeaturedWork">
          {Data.map((item, index) => (
            <div key={index} className="imgFeatured">
              <div className="imgContainer">
                <img src={item.image} alt="" srcset="" />
              </div>
              <div className="rightBlock">
                <span className="name">{item.name}</span>
                <p className="desc">{item.description}</p>
                <div className="tech">
                  {item.tech.map((item) => (
                    <span className="techSkill">{item}</span>
                  ))}
                </div>
                <span
                  className="button"
                  onClick={() => {
                    setOpenModal(true);
                    hanldeClick(item.id);
                  }}
                >
                  see project
                </span>
              </div>
            </div>
          ))}
        </div>

        {openModal && (
          <Modal data={selectedData} onClose={() => setOpenModal(false)} />
        )}
      </div>
    </section>
  );
}

export default Index;