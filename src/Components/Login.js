import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Login({ handleCredentials }) {
  const [formElement, changeFormElement] = useState({
    email: "",
    password: "",
  });

  const onEmailChange = (event) => {
    changeFormElement({ ...formElement, email: event.target.value });
  };
  const onPasswordChange = (event) => {
    changeFormElement({ ...formElement, password: event.target.value });
  };

  function validateForm() {
    return formElement.email.length > 0 && formElement.password.length > 0;
  }

  return (
    <Form
      onSubmit={(e) => {
        handleCredentials(e, formElement);
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
      <Button variant="primary" type="submit" disabled={!validateForm()}>
        Submit
      </Button>
    </Form>
  );
}

/*
  
  const firebase = require("firebase");

firebase.initializeApp({
  apiKey: "AIzaSyDV3uwm6YzCVit0Bn4FEfN5Ko0Z81XPF24",
  authDomain: "nasahack-18440.firebaseapp.com",
  databaseURL: "https://nasahack-18440.firebaseio.com",
  projectId: "nasahack-18440",
  storageBucket: "nasahack-18440.appspot.com",
  messagingSenderId: "730880143922",
  appId: "1:730880143922:web:7a6ad465a5a6d7da16822b",
  measurementId: "G-P4CS0BFPRG",
});

const db = firebase.firestore();
const auth = firebase.auth();

const register = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);

      //if success make them go to the next page
    })
    .catch((err) => console.log(err));
};

const login = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res);
      //if success make them go to the next page
    })
    .catch((err) => {
      console.log(err);
    });
};

  */
