import React from "react";

function Card({ title, children, icon, alt, style }) {
  return (
    <div style={style} className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__description">{children}</div>
      {icon && <img src={icon} className="card__icon" alt={alt} />}
    </div>
  );
}

export default Card;
