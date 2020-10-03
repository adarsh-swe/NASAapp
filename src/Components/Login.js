import React, { useState } from 'react';
import { Button, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={e => setEmail(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit"
                disabled={!validateForm()}
            >
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