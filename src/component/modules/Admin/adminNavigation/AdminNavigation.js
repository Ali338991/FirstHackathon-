import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Admin from '../Admin'
import Admin_Nav from '../adminNavigationBar/AdminNavigationBar'
import createBrowserHistory from "history/createBrowserHistory";



export default function AdminNavigation() {
  const history = createBrowserHistory();

  return (
    <Router>
      <Admin_Nav/>
   

      <Switch>
        <Route exact path="/Admin/">
          <Admin />
        </Route>

        </Switch>
     
    </Router>
  );
}
