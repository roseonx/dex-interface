import React, { useState, useEffect } from "react";
import cx from "classnames";

import { BiChevronDown } from "react-icons/bi";

import Modal from "../Modal/Modal";

import dropDownIcon from "img/DROP_DOWN.svg";
import "./TokenSelector.css";
import TooltipWithPortal from "../Tooltip/TooltipWithPortal";
import { bigNumberify, expandDecimals, formatAmount } from "lib/numbers";
import { getToken } from "config/tokens";
import { importImage } from "lib/legacy";
import { t } from "@lingui/macro";

export default function TokenSelector(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const tokenInfo = getToken(props.chainId, props.tokenAddress);
  const {
    tokens,
    mintingCap,
    infoTokens,
    showMintingCap,
    disabled,
    selectedTokenLabel,
    showBalances = true,
    showTokenImgInDropdown = false,
    showSymbolImage = false,
    showNewCaret = false,
    getTokenState = () => ({ disabled: false, message: null }),
    disableBodyScrollLock,
  } = props;

  const visibleTokens = tokens.filter((t) => !t.isTempHidden);

  if (!tokenInfo) {
    return null;
  }

  const tokenImage = showSymbolImage && importImage(`ic_${tokenInfo.symbol.toLowerCase()}_24.svg`);

  const onSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredTokens = visibleTokens.filter((item) => {
    return (
      item.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
      item.symbol.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
    );
  });

  return (
    <div className={cx("TokenSelector", { disabled }, props.className)}>
      {selectedTokenLabel ? (
        <div className="TokenSelector-box">
          {selectedTokenLabel}
        </div>
      ) : (
        <div className="TokenSelector-box">
          {tokenInfo.symbol}
          {showSymbolImage && <img src={tokenImage} alt={tokenInfo.symbol} className="TokenSelector-box-symbol" />}
          {showNewCaret && <img src={dropDownIcon} alt="Dropdown Icon" className="TokenSelector-box-caret" />}
        </div>
      )}
    </div>
  );
}
