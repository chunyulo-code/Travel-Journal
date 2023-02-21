import React from "react";
import headerIcon from "../assets/headerIcon.png";

export default function Header() {
  return (
    <div className="header">
      <img className="header-icon" src={headerIcon} alt="" />
      <div className="header-title">my.travel.journal</div>
    </div>
  );
}
