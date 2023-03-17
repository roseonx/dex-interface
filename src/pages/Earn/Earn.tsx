import React, { useState, useCallback } from "react";

import Footer from "../../components/Footer/Footer";

import "./Earn.css";
import EarnMenu from "../../components/Earn/Menu";
import ROLPContent from "../../components/Earn/ROLP";

export default function Earn(props) {
  const ROLP = "ROLP";
  const ROSX = "ROSX";
  const GENESIS = "Genesis";
  const [menu, setMenu] = useState(ROLP);
  const onChange = (e) => {
    setMenu(e)
  }

  const renderRightContent = () => {
    if(menu === ROLP)
      return <ROLPContent/>
  }

  return (
    <div className="Earn page-layout">
      <div className="Earn-layout">
        <div className="Earn-left-menu">
          <EarnMenu onChange={onChange}/>
        </div>
        <div className="Earn-right-content">
          {menu === ROLP && <ROLPContent/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
