import React, { useState } from "react";
import DropdownItem from "./DropDownItem";
import "./about.styles.css";

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Dropdown">
      <button
        onClick={(e) => {
          setIsOpen(!isOpen);
        }}
      >
        Dropdown button
      </button>
      <div className={isOpen ? "dropdown-group active" : "dropdown-group"}>
        {props.children}
      </div>
    </div>
  );
}

export default Dropdown;
