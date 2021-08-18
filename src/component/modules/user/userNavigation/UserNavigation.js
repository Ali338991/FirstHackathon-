import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from '../User'
import UserNavigationBar from "../userNavigationBar/UserNavigationBar";

import createBrowserHistory from "history/createBrowserHistory";
import ChangePassword from "../modules/ChangePassword";
import MyCourse from "../modules/MyCourse"
import AddCourse from "../modules/AddCourse";
import DetailCourse from "../modules/DetailCourse";

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
        </Route>AddCourse
        <Route exact path="/User/MyCourses">
          <MyCourse />
        </Route>
        <Route exact path="/User/AddCourse">
          <AddCourse />
        </Route>

        <Route exact path={`/detail/:id`}>
          <DetailCourse />
        </Route>
        {/* <Route exact path="/Admin/AddPic">
          <AddPic />
        </Route> */}
      </Switch>
    </Router>
  );
}
