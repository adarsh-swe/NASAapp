import React, { useState } from "react";
import FormFill from "./Components/FormFill";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [tasks, changeTasks] = useState([]);
  const [diet, changeDiet] = useState({});
  const handleTaskSubmit = (e, formElement) => {
    e.preventDefault();
    changeTasks([...tasks, formElement]);
  };
  const handleDietSubmit = (e, dietElement) => {
    e.preventDefault();
    changeDiet(dietElement);
  };
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <FormFill
              handleTaskSubmit={handleTaskSubmit}
              handleDietSubmit={handleDietSubmit}
            />
          </Route>
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
