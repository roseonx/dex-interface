import React, {useEffect, useState} from "react";

import cx from "classnames";

import "./Checkbox.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

export default function Checkbox(props) {
  const { isChecked, setIsChecked, disabled, className, isLong} = props;
  const [color,setColor] = useState("");
  useEffect(() => {
    if (isLong === true ) setColor("green-color")
    if (isLong === false ) setColor("red-color")
  },[isLong])

  return (
    <div
      className={cx("Checkbox", { disabled, selected: isChecked }, className)}
      onClick={() => setIsChecked(!isChecked)}
    >
      <span className="Checkbox-icon-wrapper">
        {isChecked && <ImCheckboxChecked className={"App-icon Checkbox-icon active " + color}/>}
        {!isChecked && <ImCheckboxUnchecked className={"App-icon Checkbox-icon inactive " + color}/>}
      </span>
      <span className="Checkbox-label">{props.children}</span>
    </div>
  );
}
