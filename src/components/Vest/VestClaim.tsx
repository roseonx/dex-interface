import React, { useEffect, useMemo, useState } from "react";
import "./VestClaim.css";

import logo from "img/vesting_claim_logo.png";
import {FaQuestionCircle} from "react-icons/fa";
import {BsArrowRight} from "react-icons/bs";
import cx from "classnames";
export default function VestClaim (prop) {
  const [enableButton,setEnableButton] = useState(false)


  return(
    <div className="VestClaim">
      <div className="overflow-auto">
        <img src={logo} width="186" alt="vesting_claim" className={"float-left"}/>
        <div className="float-right VestClaim-header">
          <div className={"VestClaim-title"}>Vest <FaQuestionCircle color="#636363" size={20}/></div>
          <div className={"VestClaim-body text-gray"}>Convert eROSX tokens to ROSX tokens.</div>
          <a href={""} target={"_blank"} className={"VestClaim-link"}>Read Vesting Details</a>
          <div className={"VestClaim-arrow"}><BsArrowRight color="#E368DB" size={20}/></div>
        </div>
      </div>
      <div className={"w-100 text-gray VestClaim-detail"}>
        <div className={"overflow-auto w-100"}>
          <span className={"float-left"}>Staked</span>
          <span className={"float-right text-white number"}>0.00 ROSX</span>
        </div>
        <div className={"overflow-auto w-100"}>
          <span className={"float-left"}>Reserved</span>
          <span className={"float-right number"}>0.00 ROSX</span>
        </div>
        <div className={"overflow-auto w-100"}>
          <span className={"float-left"}>Available to reserve</span>
          <span className={"float-right number"}>0.00 ROSX</span>
        </div>
      </div>
      <div className={"w-100 VestClaim-detail"}>
        <div className={"overflow-auto w-100"}>
          <span className={"float-left text-gray"}>Vesting Term</span>
          <span className={"float-right number"}>180 days</span>
        </div>
        <div className={"overflow-auto w-100"}>
          <span className={"float-left text-gray"}>Vesting Status</span>
          <span className={"float-right number"}>0.00 / 0.00 eROSX</span>
        </div>
        <div className={"overflow-auto w-100"}>
          <span className={"float-left text-gray"}>Claimable</span>
          <span className={"float-right number"}>0.00 ROSX</span>
        </div>
      </div>
      <button disabled={!enableButton} className={cx("VestClaim-button ",enableButton ? "":"disable")}>Claim</button>
    </div>
  )
}
