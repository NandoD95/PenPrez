import React from "react"; 
import Menu from "./Menu";
import Login from "./Login"

function Header() {
  // header page
  return (
    <header id="header">
      <h1>
        PenPrez 
      </h1> 
          <Menu /> 
          <Login />
    </header>
  );
}

export default Header;