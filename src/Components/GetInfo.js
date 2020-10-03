import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { TimePicker, DatePicker } from "antd";
import "antd/dist/antd.css";

function GetInfo({ handleTaskSubmit }) {
  const { RangePicker } = TimePicker;
  const [formElement, changeFormElement] = useState({
    taskName: "",
    startTime: "",
    endTime: "",
    date: "",
  });
  const [values, changeValue] = useState({
    taskName: "",
    time: "",
    date: "",
  });
  const onTimeSelect = (time, timeString) => {
    changeFormElement({
      ...formElement,
      startTime: timeString[0],
      endTime: timeString[1],
    });
    changeValue({ ...values, time: time });
  };
  const onDateSelect = (date, dateString) => {
    changeFormElement({
      ...formElement,
      date: dateString,
    });
    changeValue({ ...values, date: date });
  };

  const onTaskSelect = (event) => {
    changeFormElement({
      ...formElement,
      taskName: event.target.value,
    });
    changeValue({ ...values, taskName: event.target.value });
  };

  function validateForm() {
    return (
      formElement.taskName.length > 0 &&
      formElement.startTime.length > 0 &&
      formElement.date.length > 0 &&
      formElement.endTime.length > 0
    );
  }

  return (
    <Form
      onSubmit={(e) => {
        changeValue({ taskName: "", time: "", date: "" });
        handleTaskSubmit(e, formElement);
      }}
    >
      <Form.Group controlId="formGridEmail">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          value={values.taskName}
          onChange={onTaskSelect}
          placeholder="Enter Task"
        />
      </Form.Group>

      <Form.Group className="mb-0">
        <Form.Label>Pick time</Form.Label>
      </Form.Group>
      <Form.Group>
        <RangePicker value={values.time} onChange={onTimeSelect} />
      </Form.Group>

      <Form.Group className="mb-0">
        <Form.Label>Select date</Form.Label>
      </Form.Group>
      <Form.Group>
        <DatePicker value={values.date} onChange={onDateSelect} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!validateForm()}>
        Submit
      </Button>
    </Form>
  );
}

export default GetInfo;
