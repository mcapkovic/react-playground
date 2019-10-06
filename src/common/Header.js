import React from "react";

function Header(props) {
  return (
    <div className="header">
      {props.match.path}
      <span className="header__menu">
        {props.headerRender}
      </span>
    </div>
  );
}

export default Header;