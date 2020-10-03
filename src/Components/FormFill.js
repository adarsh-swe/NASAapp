import React from "react";
import GetDiet from "./GetDiet";
import GetInfo from "./GetInfo";

import { Container, Row, Col, Form } from "react-bootstrap";

function FormFill({ handleDietSubmit, handleTaskSubmit }) {
  return (
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
  );
}

export default FormFill;
