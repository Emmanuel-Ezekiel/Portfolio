import React from 'react'
import './modal.styles.css'
import Cancel from '../../assets/close_FILL0_wght400_GRAD0_opsz48.svg';
import { VscGithub } from "react-icons/vsc";
import { MdOpenInNew } from "react-icons/md";

const Modal = ({ data, onClose}) => {
  return (
    <div className="ModalContainer show" onClick={onClose}>
      <div className="Modal-content">
        {data?.map((item, index) => (
          <div key={index}>
            <div className="modal-header">
              <h1>{item?.name}</h1>
              <img src={Cancel} alt="menu" srcset="" onClick={onClose} />
            </div>

            <div className="modal-tech">
              {item.tech.map((item) => (
                <span className="techSkill">{item}</span>
              ))}
            </div>

            <div className="modal-image">
              <img src={item.image} alt="" srcset="" />
            </div>

            <div className="container-Source">
              <div className="modal-desc">
                <span className="itemDesc">{item?.description}</span>
              </div>
              <div className="modal-codeSource">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="live">
                    <span id="link">see live</span>{" "}
                    <MdOpenInNew className="gitLink" />
                  </div>
                </a>
                <div className="source">
                  <span id="git">see source</span>
                  <VscGithub className="gitLink" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Modal