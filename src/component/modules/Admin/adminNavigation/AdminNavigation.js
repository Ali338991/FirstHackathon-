import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Admin from '../Admin'
import AddPic from "../addPic/AddPic";
import Nav from '../adminNavigationBar/AdminNavigationBar'
import createBrowserHistory from "history/createBrowserHistory";



export default function AdminNavigation() {
  const history = createBrowserHistory();

  return (
    <Router>
      {/* <Nav/> */}
   

      <Switch>
        <Route exact path="/Admin/">
          <Admin />
        </Route>
        <Route exact path="/Admin/AddPic">
          <AddPic/>
        </Route>
        </Switch>
     
    </Router>
  );
}
