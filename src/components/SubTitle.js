import React from "react";

function Subtitle({ additionalClassNames, children }) {
  return <p className={additionalClassNames}>{children}</p>;
}

export default Subtitle;
