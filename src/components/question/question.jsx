import React from "react";
import HeaderActions from "./headerActions";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-block">
          <p>logo</p>
          <HeaderActions user="iroda0103" />
        </div>
      </div>
    </header>
  );
}

export default Header;
