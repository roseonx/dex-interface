import React, { useState } from "react";

import "./Menu.css"

import darkMenu from "img/earn_dark_menu.png";
import colorMenu from "img/earn_color_menu.png";
import menu from "img/earn_menu.png";

export default function EarnMenu({onChange}) {
  const menuActiveClass = "Earn-left-menu-content-active";
  const menuInActiveClass = "Earn-left-menu-content";


  const [rolpImage,setRolpImage] = useState(colorMenu);
  const [rosxImage,setRosxImage] = useState(darkMenu);
  const [genesisImage,setGenesisImage] = useState(darkMenu);
  const [rolpClass,setRolpClass] = useState(menuActiveClass);
  const [rosxClass,setRosxClass] = useState(menuInActiveClass);
  const [genesisClass,setGenesisClass] = useState(menuInActiveClass);

  const changeMenu = (e) => {
    switch (e) {
      case "ROSX":
        setRolpImage(darkMenu);
        setRosxImage(colorMenu);
        setGenesisImage(darkMenu);
        setRolpClass(menuInActiveClass);
        setRosxClass(menuActiveClass);
        setGenesisClass(menuInActiveClass);
        break;
      case "GENESIS":
        setRolpImage(darkMenu);
        setRosxImage(darkMenu);
        setGenesisImage(colorMenu);
        setRolpClass(menuInActiveClass);
        setRosxClass(menuInActiveClass);
        setGenesisClass(menuActiveClass);
        break;
      default:
        setRolpImage(colorMenu);
        setRosxImage(darkMenu);
        setGenesisImage(darkMenu);
        setRolpClass(menuActiveClass);
        setRosxClass(menuInActiveClass);
        setGenesisClass(menuInActiveClass);
        break;
    }
    onChange(e);
  }

  return (
    <>
      <div className="Earn-left-menu-item top" onClick={() => changeMenu("ROLP")}>
        <img src={rolpImage} alt="colorMenu" />
        <div className={rolpClass}><span>ROLP</span></div>
      </div>
      <div className="Earn-left-menu-item mid" onClick={() => changeMenu("ROSX")}>
        <img src={rosxImage} alt="colorMenu" />
        <div className={rosxClass}><span>ROSX - eROSX</span></div>
      </div>
      <div className="Earn-left-menu-item bottom" onClick={() => changeMenu("GENESIS")}>
        <img src={genesisImage} alt="colorMenu" />
        <div className={genesisClass}><span>Genesis Pool</span></div>
      </div>

      <img src={menu} alt="menu" className="Earn-left-menu-base"/>
    </>
  )
}
