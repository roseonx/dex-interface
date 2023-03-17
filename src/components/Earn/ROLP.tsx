import React, { useState, useCallback } from "react";

import "./ROLP.css"

export default function ROLP() {
  return (
    <div className={"ROLP-content"}>
      <div className="ROLP-swap-contents">
        <div className={"ROLP-swap-tabs"}>
          <div className={"ROLP-swap-tab"}>
            Mint and Stake ROLP
          </div>
          <div className={"ROLP-swap-tab"}>
            Redeem ROLP
          </div>
        </div>
      </div>
    </div>
  );
}
