import React from "react";

const Logo = ({ src = "", logoAlt = "" }) => {
  return (
    <a href="/" className="header__logo">
      <img src={src} alt={logoAlt} />
    </a>
  );
};

export default Logo;
