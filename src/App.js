import React, { useState } from "react";
import { Desktop } from "./containers/Desktop";
import { Title } from "./components/Title";
import { Login } from "./containers/Login/Login";
import { FourOFour } from "./components/FourOFour";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setDefaultUser } from "./utils/setDefaultUser";
import { Logout } from "./containers/Logout/Logout";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  setDefaultUser();

  return (
    <Router>
      <div className="min-h-screen App bg-thistle">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Desktop isAuthorized={isAuthorized} />}
          />
          <Route
            exact
            path="/login"
            component={() => <Login setIsAuthorized={setIsAuthorized} />}
          />
          <Route path="*">
            <FourOFour isAuthorized={isAuthorized} />
          </Route>
        </Switch>
      </div>
      {isAuthorized && <Title />}
      {isAuthorized && <Logout setIsAuthorized={setIsAuthorized} />}
    </Router>
  );
}

export default App;
