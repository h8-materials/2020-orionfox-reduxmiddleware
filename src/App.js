import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store/index";

import { User, UserDetail } from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={User} />
            <Route path="/:userId" component={UserDetail} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
