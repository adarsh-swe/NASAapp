import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TimePicker } from "antd";
import "antd/dist/antd.css";

function GetDiet({ handleDietSubmit }) {
  const [dietElement, changeDietElement] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });
  const [values, changeValue] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
  });
  const onBreakfast = (time, timeString) => {
    changeDietElement({
      ...dietElement,
      breakfast: timeString,
    });
    changeValue({ ...values, breakfast: time });
  };
  const onLunch = (time, timeString) => {
    changeDietElement({
      ...dietElement,
      lunch: timeString,
    });
    changeValue({ ...values, lunch: time });
  };
  const onDinner = (time, timeString) => {
    changeDietElement({
      ...dietElement,
      dinner: timeString,
    });
    changeValue({ ...values, dinner: time });
  };
  return (
    <Form
      onSubmit={(e) => {
        changeValue({ breakfast: "", lunch: "", dinner: "" });
        handleDietSubmit(e, dietElement);
      }}
    >
      <Form.Group>
        <Form.Group className="mb-0">
          <Form.Label>Breakfast</Form.Label>
        </Form.Group>
        <Form.Group>
          <TimePicker value={values.breakfast} onChange={onBreakfast} />
        </Form.Group>
      </Form.Group>

      <Form.Group>
        <Form.Group className="mb-0">
          <Form.Label>Lunch</Form.Label>
        </Form.Group>
        <Form.Group>
          <TimePicker value={values.lunch} onChange={onLunch} />
        </Form.Group>
      </Form.Group>

      <Form.Group>
        <Form.Group className="mb-0">
          <Form.Label>Dinner</Form.Label>
        </Form.Group>
        <Form.Group>
          <TimePicker value={values.dinner} onChange={onDinner} />
        </Form.Group>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GetDiet;
