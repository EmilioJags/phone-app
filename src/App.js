import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import PhoneListComponent from "./Components/PhoneListComponent";
import AddPhone from "./Components/AddPhone";
import EditPhoneComponent from "./Components/EditPhoneComponent";
import TaskManagerComponent from "./Components/TaskManagerComponent";
import WeatherComponent from "./Components/WeatherComponent";
import GameComponent from "./Components/GameComponent";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <HeaderComponent />
          <div style={{ marginTop: "55px" }} className="container">
            <Switch>
              <Route exact path="/" component={PhoneListComponent}></Route>
              <Route
                exact
                path="/task-manager"
                component={TaskManagerComponent}
              ></Route>
              <Route
                exact
                path="/weather-app"
                component={WeatherComponent}
              ></Route>
              <Route exact path="/game-app" component={GameComponent}></Route>
              <Route exact path="/agregar" component={AddPhone}></Route>
              <Route
                exact
                path="/edit-phone/:id"
                component={EditPhoneComponent}
              ></Route>
              <Route
                exact
                path="/remove-phone/:id"
                component={AddPhone}
              ></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
}

export default App;
