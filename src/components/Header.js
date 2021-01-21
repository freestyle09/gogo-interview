import React from "react";
import Logo from "./Logo";

const Header = ({ logo = "" }) => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <Logo src={logo} logoAlt="PSD2CSS" />
      </div>
    </header>
  );
};

export default Header;
