import React, { useState } from "react";
import FormFill from "./Components/FormFill";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./config";

function App() {
  const [tasks, changeTasks] = useState([]);
  const [diet, changeDiet] = useState({});
  const [credentials, changeCredintials] = useState({});
  const handleTaskSubmit = (e, formElement) => {
    e.preventDefault();
    changeTasks([...tasks, formElement]);
  };
  const handleDietSubmit = (e, dietElement) => {
    e.preventDefault();
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
              <FormFill
                handleTaskSubmit={handleTaskSubmit}
                handleDietSubmit={handleDietSubmit}
              />
            ) : (
              <Login handleCredentials={handleCredentials} />
            )}
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
