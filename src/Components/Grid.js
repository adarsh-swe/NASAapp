import React from "react";
import {Container, Col, Row } from "react-bootstrap";


function Grid(/*{time}, {day1}, {day2}, {day3}*/) {
    return (
        <Container>
            <Row>
                <Col className = "col">Time{/*{time}*/}</Col>
                <Col className = "col"> Day1{/*{Day1}*/}</Col>
                <Col className = "col">Day2{/*{Day2}*/}</Col>
                <Col className = "col">Day3{/*{Day3}*/}</Col>
            </Row>
        </Container>
    );
}

export default Grid;