import React from "react";
import Home from "./Home";

function Header() {
  // header page
  return (
    <header className="header">
      <h1>
        PENPREZ
        <div>
          BUSINESS COPYWRITING
        </div>
      </h1> 
      <h3>
        Words that Win Clients
        <div>
          Email, Social Media, SMS, and more
          </div>
      </h3>
      <div className="home-header">
        <Home />
      </div>
    </header>
  );
}

export default Header;