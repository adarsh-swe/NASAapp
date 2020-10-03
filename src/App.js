import React from "react";
import GetInfo from "./Components/GetInfo";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          < Route path="/" component = {GetInfo} exact/>
          <Route path="/login" component = {Login}exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
