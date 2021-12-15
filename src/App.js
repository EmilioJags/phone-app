import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import PhoneListComponent from "./Components/PhoneListComponent";
import AddPhone from "./Components/AddPhone";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div style={{ marginTop: "55px" }} className="container">
            <Switch>
              <Route path="/" exact component={PhoneListComponent}></Route>
              <Route
                path="/listatelefono"
                component={PhoneListComponent}
              ></Route>
              <Route path="/agregar" component={AddPhone}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
}

export default App;
