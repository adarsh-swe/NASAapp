import React, { useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Grid from "./Components/Grid";
import Register from "./Components/Register";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./config";
import GetInfo from "./Components/GetInfo";

function App() {
  const [tasks, changeTasks] = useState([]);
  const [diet, changeDiet] = useState({});
  const [credentials, changeCredintials] = useState({});

  const handleFormSubmit = (formElement, dietElement) => {
    changeTasks([...tasks, formElement]);
    changeDiet(dietElement);
  };

  const handleCredentials = (formElement) => {
    changeCredintials(formElement);
  };

  const user = auth.currentUser;
  return (
    <Router>
      <div className="page">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {user ? (
              <GetInfo handleFormSubmit={handleFormSubmit} />
            ) : (
              <Login handleCredentials={handleCredentials} />
            )}
          </Route>
          <Route path="/grid" exact>
            {user ? <Grid /> : <Login handleCredentials={handleCredentials} />}
          </Route>
          <Route path="/login" exact>
            <Login handleCredentials={handleCredentials} />
          </Route>
          <Route path="/register" exact>
            {" "}
            <Register handleCredentials={handleCredentials} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
