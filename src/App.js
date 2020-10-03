import React from "react";
import GetInfo from "./Components/GetInfo";
import Login from "./Components/Login";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
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
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            {GetInfo}
          </Route>
          <Route path="/login" exact>
            {Login}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
