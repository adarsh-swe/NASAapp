import React from "react";
import GetInfo from "./Components/GetInfo";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <GetInfo />
      </Container>
    </div>
  );
}

export default App;
