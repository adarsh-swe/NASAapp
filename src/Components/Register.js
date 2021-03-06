import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "../config";

export default function Register() {
  const history = useHistory();
  const [formElement, changeFormElement] = useState({
    email: "",
    password: "",
  });
  const [authorized, setauthorized] = useState(false);

  const onEmailChange = (event) => {
    changeFormElement({ ...formElement, email: event.target.value });
  };
  const onPasswordChange = (event) => {
    changeFormElement({ ...formElement, password: event.target.value });
  };

  function validateForm() {
    return formElement.email.length > 0 && formElement.password.length > 0;
  }

  const registerNew = (email, password) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        console.log("Working");
        history.push("/");
        //if success make them go to the next page
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid email/password or user already exists");
        changeFormElement({ email: "", password: "" });
        history.push("/register");
      });
  };

  return (
    <Form
      className="login"
      onSubmit={(e) => {
        e.preventDefault();
        registerNew(formElement.email, formElement.password);
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={formElement.email}
          onChange={onEmailChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={formElement.password}
          onChange={onPasswordChange}
        />
      </Form.Group>
      <Button className="logonButton" variant="primary" type="submit ">
        Register
      </Button>
    </Form>
  );
}
