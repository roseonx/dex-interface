import React, { useEffect, useMemo, useState } from "react";

import logo from "img/vesting_claim_logo.png";
import {FaQuestionCircle} from "react-icons/fa";
export default function VestClaim (prop) {
  return(
    <div className="VestClaim">
      <div className="VestClaim-header">
        <img src={logo} width="186" alt="vesting_claim"/>
        <div className="VestClaim-title">
          <p>Vest <FaQuestionCircle color="#636363"/></p>
        </div>
      </div>
    </div>
  )
}
