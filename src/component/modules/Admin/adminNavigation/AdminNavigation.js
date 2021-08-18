import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Admin from '../Admin'
import Admin_Nav from '../adminNavigationBar/AdminNavigationBar'
import createBrowserHistory from "history/createBrowserHistory";
import StudentList from "../modules/StudentList";
import UserList from "../modules/UserList";
import SubscriberList from "../modules/SubscriberList";



export default function AdminNavigation() {
  const history = createBrowserHistory();

  return (
    <Router>
      <Admin_Nav/>
   

      <Switch>
        <Route exact path="/Admin/">
          <Admin />
        </Route>

        <Route exact path="/Admin/StudentList">
          <StudentList />
        </Route>

        <Route exact path="/Admin/UserList">
          <UserList />
        </Route>

        <Route exact path="/Admin/SubscriberList">
          <SubscriberList />
        </Route>


        </Switch>
     
    </Router>
  );
}
