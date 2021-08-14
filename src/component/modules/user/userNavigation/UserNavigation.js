import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from '../User'
import UserNavigationBar from "../userNavigationBar/UserNavigationBar";

import createBrowserHistory from "history/createBrowserHistory";
import ChangePassword from "../modules/ChangePassword";

export default function UserNavigation() {
  const history = createBrowserHistory();

  return (
    <Router>
      <UserNavigationBar/>
      <Switch>    
        <Route exact path="/User/">
          <User />
        </Route>

        <Route exact path="/User/ChangePassword">
          <ChangePassword />
        </Route>
        {/* <Route exact path="/Admin/AddPic">
          <AddPic />
        </Route> */}
      </Switch>
    </Router>
  );
}
