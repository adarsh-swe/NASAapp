import React from "react";
import {Container, Col, Row } from "react-bootstrap";


function Grid(/*{time}, {day1}, {day2}, {day3}*/) {
    return (
        <Container>
            <Col >
                <Row className = "col">Header{/*{header}*/}</Row>
                <Row className = "col"> 0{/*0*/}</Row>
                <Row className = "col"> 1{/*{1}*/}</Row>
                <Row className = "col">2{/*{2}*/}</Row>
                <Row className = "col">3{/*{3}*/}</Row>
                <Row className = "col">4{/*{4}*/}</Row>
                <Row className = "col">5{/*{5}*/}</Row>
                <Row className = "col">6{/*{6}*/}</Row>
                <Row className = "col">7{/*{7}*/}</Row>
                <Row className = "col">8{/*{8}*/}</Row>
                <Row className = "col">9{/*{9}*/}</Row>
                <Row className = "col">10{/*{10}*/}</Row>
                <Row className = "col">11{/*{11}*/}</Row>
                <Row className = "col">12{/*{12}*/}</Row>
                <Row className = "col">13{/*{13}*/}</Row>
                <Row className = "col">14{/*{14}*/}</Row>
                <Row className = "col">15{/*{15}*/}</Row>
                <Row className = "col">16{/*{16}*/}</Row>
                <Row className = "col">17{/*{17}*/}</Row>
                <Row className = "col">18{/*{18}*/}</Row>
                <Row className = "col">19{/*{19}*/}</Row>
                <Row className = "col">20{/*{20}*/}</Row>
                <Row className = "col">21{/*{21}*/}</Row>
                <Row className = "col">22{/*{22}*/}</Row>
                <Row className = "col">23{/*{23}*/}</Row>
            </Col>
        </Container>
    );
}

export default Grid;