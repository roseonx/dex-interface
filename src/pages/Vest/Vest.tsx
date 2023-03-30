import React, { useState, useCallback } from "react";
import "./Vest.css";
import VestClaim from "../../components/Vest/VestClaim";
import DepositWithdraw from "../../components/Vest/DepositWithdraw";

export default function Vest(props) {
  return (
    <div className="Vest page-layout">
      <div className="Vest-left-container">
        <VestClaim/>
      </div>
      <div className="Vest-right-container">
        <DepositWithdraw/>
      </div>
    </div>
  )
}
