import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IceCream from "./pages/IceCream";
import Home from "./pages/home";
import Cake from "./pages/Cake";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/icecream">
            <IceCream />
          </Route>
          <Route path="/cake">
            <Cake />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
