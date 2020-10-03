import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="topnav">
        <nav>
          <ul>
            <li>
              <Link to="/">Getinfo</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/grid">Output</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        </div>
    );

}

export default Navbar;