import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import PhoneListComponent from "./Components/PhoneListComponent";
import AddPhone from "./Components/AddPhone";
import FindPhone from "./Components/FindPhone";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={PhoneListComponent}></Route>
              <Route
                path="/listatelefono"
                component={PhoneListComponent}
              ></Route>
              <Route path="/agregar" component={AddPhone}></Route>
              <Route path="/find-phone" component={FindPhone}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
}

export default App;
