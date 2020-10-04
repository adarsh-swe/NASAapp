import React from "react";
import { Link } from 'react-router-dom';
import firebase from "firebase";
import {auth} from "../config"

function Navbar() {
  const user = auth.currentUser;

  return (user ? 
    <div className="topnav">
    <nav>
      <ul>
        <li>
          <Link to="/">Getinfo</Link>
        </li>
        <li>
          <Link to="/grid">Output</Link>
        </li>
      </ul>
    </nav>
    </div>
  : 
    <div className="topnav">
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
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