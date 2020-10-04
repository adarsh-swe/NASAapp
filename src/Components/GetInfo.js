import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { TimePicker, DatePicker } from "antd";
import "antd/dist/antd.css";

function GetInfo({ handleFormSubmit }) {
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

  const [dietElement, changeDietElement] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });
  const [dietValues, changeDietValues] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });
  const onBreakfast = (time, timeString) => {
    changeDietElement({
      ...dietElement,
      breakfast: timeString,
    });
    changeDietValues({ ...dietValues, breakfast: time });
  };
  const onLunch = (time, timeString) => {
    changeDietElement({
      ...dietElement,
      lunch: timeString,
    });
    changeDietValues({ ...dietValues, lunch: time });
  };
  const onDinner = (time, timeString) => {
    changeDietElement({
      ...dietElement,
      dinner: timeString,
    });
    changeDietValues({ ...dietValues, dinner: time });
  };

  function validateForm() {
    return (
      formElement.taskName.length > 0 &&
      formElement.startTime.length > 0 &&
      formElement.date.length > 0 &&
      formElement.endTime.length > 0 &&
      dietElement.dinner.length > 0 &&
      dietElement.breakfast.length > 0 &&
      dietElement.lunch.length > 0
    );
  }

  return (
    <Form
      className="infoForm"
      onSubmit={(e) => {
        e.preventDefault();
        changeValue({ taskName: "", time: "", date: "" });
        changeDietValues({ breakfast: "", lunch: "", dinner: "" });
        handleFormSubmit(formElement, dietElement);
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
        <RangePicker
          minuteStep={60}
          secondStep={60}
          value={values.time}
          onChange={onTimeSelect}
        />
      </Form.Group>

      <Form.Group className="mb-0">
        <Form.Label>Select date</Form.Label>
      </Form.Group>
      <Form.Group>
        <DatePicker value={values.date} onChange={onDateSelect} />
      </Form.Group>

      <Form.Group>
        <Form.Group className="mb-0">
          <Form.Label>Breakfast</Form.Label>
        </Form.Group>
        <Form.Group>
          <TimePicker
            minuteStep={60}
            secondStep={60}
            value={dietValues.breakfast}
            onChange={onBreakfast}
          />
        </Form.Group>
      </Form.Group>

      <Form.Group>
        <Form.Group className="mb-0">
          <Form.Label>Lunch</Form.Label>
        </Form.Group>
        <Form.Group>
          <TimePicker
            minuteStep={60}
            secondStep={60}
            value={dietValues.lunch}
            onChange={onLunch}
          />
        </Form.Group>
      </Form.Group>

      <Form.Group>
        <Form.Group className="mb-0">
          <Form.Label>Dinner</Form.Label>
        </Form.Group>
        <Form.Group>
          <TimePicker
            minuteStep={60}
            secondStep={60}
            value={dietValues.dinner}
            onChange={onDinner}
          />
        </Form.Group>
      </Form.Group>

      <Button
        className="infoButton"
        variant="primary"
        type="submit"
        disabled={!validateForm()}
      >
        Submit
      </Button>
    </Form>
  );
}

export default GetInfo;
