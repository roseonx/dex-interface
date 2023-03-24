import React, { useState, useCallback } from "react";
import "./Vest.css";
import Footer from "../../components/Footer/Footer";
import VestClaim from "../../components/Vest/VestClaim";

export default function Vest(props) {
  return (
    <div className="Vest page-layout">
      <div className="Vest-left-container">
        <VestClaim/>
      </div>
      <div className="Vest-right-container">

      </div>
    </div>
  )
}
