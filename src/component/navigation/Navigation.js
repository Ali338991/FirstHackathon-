import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../commonComponent/navigationBar/NavigationBar";
import Login from "../modules/auth/login/Login";
import SignUp from "../modules/auth/signUp/SignUp";
import Home from "../modules/home/Home";
import Footer from "../commonComponent/footer/Footer";
import AdminNavigation from "../modules/Admin/adminNavigation/AdminNavigation";
import createBrowserHistory from "history/createBrowserHistory";
import UserNavigation from "../modules/user/userNavigation/UserNavigation";

export default function Navigation() {
  const history = createBrowserHistory();

  return (
    <Router>
      {history.location.pathname === "/User" || history.location.pathname === "/Admin" || history.location.pathname === "/Login" || history.location.pathname === "/SignUp" ? null : <NavigationBar />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>
        
        <Route path="/User">
          <UserNavigation />
        </Route>

        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Admin">
          <AdminNavigation />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}
