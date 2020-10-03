import React, { useState } from "react";
import { Button, Form} from "react-bootstrap";
import { db,auth } from "../config";
import { Link } from 'react-router-dom';

export default function Login({ handleCredentials }) {
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

  const login = (email, password) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        //if success make them go to the next page
        setauthorized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Form

    onSubmit={(e) => {
        
        login(formElement.email,formElement.password);
      }
    }
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
        Login
      </Button>
      <h3> {authorized ? <Link to="/">Getinfo</Link>: " " }</h3>
      <h1> OR </h1>
      <Button variant="primary" type="submit" disabled={!authorized}>
        Register
      </Button>
    </Form>
  );
}



/*

onSubmit={(e) => {
        
        handleCredentials(e, formElement);
      }
    }

*/