import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="topnav">
        <nav>
          <ul>
            <li>
              <Link to="/">Getinfo</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/grid">Output</Link>
            </li>
          </ul>
        </nav>
        </div>
    );

}

export default Navbar;