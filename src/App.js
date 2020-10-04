import React, { useState } from "react";
import FormFill from "./Components/FormFill";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Grid from "./Components/Grid";
import Register from "./Components/Register";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth, update } from "./config";

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

  const get_schedule = () => {
    console.log(tasks);
    console.log(diet);

    const b = parseInt(diet.breakfast.substring(0, 2));
    const l = parseInt(diet.lunch.substring(0, 2));
    const d = parseInt(diet.dinner.substring(0, 2));

    const food = [
      [b, b + 1],
      [l, l + 1],
      [d, d + 1],
    ];

    const set = new Set();
    tasks.forEach((x) => {
      set.add(Date.parse(x.date));
    });

    const map = {};

    const arr = Array.from(set);
    arr.sort((a, b) => {
      return a - b;
    });

    arr.forEach((x, i) => {
      map[x] = i;
    });

    const events = [];
    tasks.forEach((x) => {
      events.push([
        map[Date.parse(x.date)],
        parseInt(x.startTime.substring(0, 2)),
        parseInt(x.endTime.substring(0, 2)),
        x.taskName,
      ]);
    });

    events.sort((a, b) => {
      return a[0] != b[0] ? a[0] - b[0] : a[1] - b[1];
    });

    console.log(events);

    console.log(b + " " + l + " " + d);

    update(events, food);
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
            <button className = "navbar" onClick={get_schedule}>get schedule</button>

      </div>

    </Router>
  );
}

export default App;
