import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <a href="/" className="logo" aria-label="Bagshop Home">
          BAGSHOP
        </a>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-right">
          <button className="cart" aria-label="Shopping cart">
            <span role="img" aria-hidden="true">🛒</span>
          </button>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
