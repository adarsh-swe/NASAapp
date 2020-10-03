import React, { useState } from "react";
import GetInfo from "./Components/GetInfo";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import GetDiet from "./Components/GetDiet";

function App() {
  const [tasks, changeTasks] = useState([]);
  const [diet, changeDiet] = useState({});
  const handleTaskSubmit = (e, formElement) => {
    e.preventDefault();
    changeTasks([...tasks, formElement]);
  };
  const handleDietSubmit = (e, dietElement) => {
    e.preventDefault();
    changeDiet(dietElement);
  };
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" component={GetInfo} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <GetDiet handleDietSubmit={handleDietSubmit} />
          </Col>
          <Col sm="4">
            <GetInfo handleTaskSubmit={handleTaskSubmit} />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
