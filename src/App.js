import React, { useState } from "react";
import GetInfo from "./Components/GetInfo";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
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
    <div className="App">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col sm="4">
            {/* <GetInfo handleTaskSubmit={handleTaskSubmit} /> */}
            <GetDiet handleDietSubmit={handleDietSubmit} />
          </Col>
          <Col sm="4">
            <GetInfo handleTaskSubmit={handleTaskSubmit} />
            {/* <GetDiet handleDietSubmit={handleDietSubmit} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
