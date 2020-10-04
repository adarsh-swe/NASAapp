import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../config";

function Navbar() {
  const user = auth.currentUser;
  return (
    <div className="topnav">
      <div className={user ? "d-none" : "visible"}>
        <nav>
          <ul>
            <li>
              <Link to="/login" style={{ textDecoration: 'none'}}>Login</Link>
            </li>
            <li>
              <Link to="/register" style={{ textDecoration: 'none'}}>Register</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={user ? "visible" : "d-none"}>
        <nav>
          <ul>
            <li>
              <Link to="/"style={{ textDecoration: 'none'}}>Add Event</Link>
            </li>
            <li>
              <Link to="/grid"style={{ textDecoration: 'none'}}>Schedule</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
