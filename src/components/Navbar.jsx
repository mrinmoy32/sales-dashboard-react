import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>
        Sales Dashboard
        </h3>
      </div>
      <ul className="nav-links">
        <li>
          <h4>HomePage</h4>
        </li>
        <li>
          <h4>Dashboard</h4>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
