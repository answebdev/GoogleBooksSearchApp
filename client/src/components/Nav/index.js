import React from "react";
import book from "../../img/book.png";
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary"><img src={book} alt="management logo" />
      <a className="navbar-brand" href="/">
      &nbsp;&nbsp;Google Books Search App
      </a>
    </nav>
  );
}

export default Nav;
