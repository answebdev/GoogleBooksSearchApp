import React from "react";
import owl from "../../img/owl.png";
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"><img src={owl} alt="Owl" />
      <a className="navbar-brand" href="/">
      &nbsp;&nbsp;Google Books Search App
      </a>
    </nav>
  );
}

export default Nav;
