import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { TimePicker } from "antd";
import "antd/dist/antd.css";
import * as moment from "moment";

function GetDiet({ handleDietSubmit }) {
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
      dietElement.dinner.length > 0 &&
      dietElement.breakfast.length > 0 &&
      dietElement.lunch.length > 0
    );
  }
  return (
    <Form
      className="dietForm"
      onSubmit={(e) => {
        changeDietValues({ breakfast: "", lunch: "", dinner: "" });
        handleDietSubmit(e, dietElement);
      }}
    >
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
        variant="primary"
        type="submit"
        disabled={!validateForm()}
        className="dietButton"
      >
        Submit
      </Button>
    </Form>
  );
}

export default GetDiet;
