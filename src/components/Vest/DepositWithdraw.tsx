import React, { useEffect, useMemo, useState } from "react";
import "./DepositWithdraw.css";
import Tab from "../Tab/Tab";
import {SWAP_OPTIONS} from "../../lib/legacy";

export default function DepositWithdraw () {
  const [swapOption,setSwapOption] = useState("Deposit")

  const options = ["Deposit","Withdraw"];

  const onOptionChange = (opt) => {
    console.log(opt)
    setSwapOption(opt);
  }


  return (
    <div className={"DepositWithdraw"}>
      <Tab
        options={options}
        option={swapOption}
        onChange={onOptionChange}
        className={"DepositWithdraw-option"}
      />
    </div>
  )
}
