import React from "react";

function Title({ style, additionalClassNames, title, element = "h1" }) {
  return React.createElement(
    element,
    { style, className: additionalClassNames },
    title
  );
}

export default Title;
