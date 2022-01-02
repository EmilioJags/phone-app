import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import PhoneListComponent from "./Components/PhoneListComponent";
import AddPhone from "./Components/AddPhone";
import EditPhoneComponent from "./Components/EditPhoneComponent";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container">
          <HeaderComponent />
          <div style={{ marginTop: "55px" }} className="container">
            <Switch>
              <Route exact path="/" component={PhoneListComponent}></Route>
              <Route path="/agregar" component={AddPhone}></Route>
              <Route
                path="/edit-phone/:id"
                component={EditPhoneComponent}
              ></Route>
              <Route path="/remove-phone/:id" component={AddPhone}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </>
  );
}

export default App;
