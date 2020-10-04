import React from "react";
import {Card, Button} from "react-bootstrap";


function Grid(/*{time}, {day1}, {day2}, {day3}*/) {
    return (
        <div>
            <Card  className = "card" style={{ width: '80vw' }}>
                <Card.Body>
                    <Card.Title>Day 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className = "card" style={{ width: '80vw' }}>
                <Card.Body>
                    <Card.Title>Day 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className = "card" style={{ width: '80vw' }}>
                <Card.Body>
                    <Card.Title>Day 3</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Grid;