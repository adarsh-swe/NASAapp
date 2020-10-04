import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { auth, db } from "../config";

function Grid(/*{time}, {day1}, {day2}, {day3}*/) {
  const [stuff, changeStuff] = useState([]);
  const get_schedule = () => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .get()
      .then((res) => {
        console.log(res.data());
        const schedule = res.data().schedule;
        changeStuff(schedule);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //   const events = [
  //     { day: 0, startTime: 0, endTime: 1, taskName: "NAP" },
  //     { day: 0, startTime: 1, endTime: 2, taskName: "EXERCISE" },
  //     { day: 0, startTime: 2, endTime: 3, taskName: "BREAKFAST" },
  //     { day: 0, startTime: 3, endTime: 8, taskName: "newlksk" },
  //     { day: 0, startTime: 3, endTime: 4, taskName: "EXERCISE" },
  //     { day: 0, startTime: 4, endTime: 5, taskName: "LUNCH" },
  //     { day: 0, startTime: 5, endTime: 6, taskName: "DINNER" },
  //     { day: 0, startTime: 6, endTime: 7, taskName: "EXERCISE" },
  //     { day: 0, startTime: 8, endTime: 13, taskName: "SLEEP" },
  //     { day: 0, startTime: 21, endTime: 22, taskName: "EXERCISE" },
  //     { day: 1, startTime: 2, endTime: 3, taskName: "BREAKFAST" },
  //     { day: 1, startTime: 3, endTime: 4, taskName: "NAP" },
  //     { day: 1, startTime: 4, endTime: 5, taskName: "LUNCH" },
  //     { day: 1, startTime: 5, endTime: 6, taskName: "DINNER" },
  //     { day: 1, startTime: 7, endTime: 8, taskName: "EXERCISE" },
  //     { day: 1, startTime: 11, endTime: 16, taskName: "SLEEP" },
  //     { day: 1, startTime: 21, endTime: 22, taskName: "EXERCISE" },
  //     { day: 2, startTime: 2, endTime: 3, taskName: "BREAKFAST" },
  //     { day: 2, startTime: 3, endTime: 4, taskName: "NAP" },
  //     { day: 2, startTime: 4, endTime: 5, taskName: "LUNCH" },
  //     { day: 2, startTime: 5, endTime: 6, taskName: "DINNER" },
  //     { day: 2, startTime: 7, endTime: 8, taskName: "EXERCISE" },
  //     { day: 2, startTime: 11, endTime: 16, taskName: "SLEEP" },
  //     { day: 2, startTime: 16, endTime: 17, taskName: "EXERCISE" },
  //     { day: 2, startTime: 22, endTime: 23, taskName: "NAP" },
  //   ];
  get_schedule();
  let day1 = [];
  let day2 = [];
  let day3 = [];
  stuff.map((event) => {
    if (event.day == 0) {
      day1.push(event);
    } else if (event.day == 1) {
      day2.push(event);
    } else {
      day3.push(event);
    }
  });
  return (
    <div>
      <Card className="card" style={{ width: "60vw" }}>
        <Card.Body>
          <Card.Title>Day 1</Card.Title>
          <Container>
            <Row>
              {day1.map((event) => {
                return (
                  <Col>
                    <Card border="danger" style={{ width: "18rem" }}>
                      <Card.Header>{event.taskName}</Card.Header>
                      <Card.Body>
                        <Card.Title>
                          Timing: {event.startTime} to {event.endTime}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "60vw" }}>
        <Card.Body>
          <Card.Title>Day 2</Card.Title>
          <Container>
            <Row>
              {day2.map((event) => {
                return (
                  <Col>
                    <Card border="danger" style={{ width: "18rem" }}>
                      <Card.Header>{event.taskName}</Card.Header>
                      <Card.Body>
                        <Card.Title>
                          Timing: {event.startTime} to {event.endTime}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Card.Body>
      </Card>{" "}
      <Card className="card" style={{ width: "60vw" }}>
        <Card.Body>
          <Card.Title>Day 3</Card.Title>
          <Container>
            <Row>
              {day3.map((event) => {
                return (
                  <Col>
                    <Card border="danger" style={{ width: "18rem" }}>
                      <Card.Header>{event.taskName}</Card.Header>
                      <Card.Body>
                        <Card.Title>
                          Timing: {event.startTime} to {event.endTime}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Grid;
