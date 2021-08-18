import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../commonComponent/navigationBar/NavigationBar";
import Login from "../modules/auth/login/Login";
import SignUp from "../modules/auth/signUp/SignUp";
import Home from "../modules/home/Home";
import Footer from "../commonComponent/footer/Footer";
import AdminNavigation from "../modules/Admin/adminNavigation/AdminNavigation";
import createBrowserHistory from "history/createBrowserHistory";
import UserNavigation from "../modules/user/userNavigation/UserNavigation";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Verify from "../../Verify";

export default function Navigation() {
  const history = createBrowserHistory();
  const authState = useSelector((state) => state.AuthReducer.isUserLoggedIn);
  const userEmail = useSelector((state) => state.AuthReducer.user?.emailVerified);

  return (
    <Router>
      {history.location.pathname === "/User" ||
      history.location.pathname === "/Admin" ||
      history.location.pathname === "/Login" ||
      history.location.pathname === "/SignUp" ? null : (
        <NavigationBar />
      )}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <PublicRoute path="/Login" auth={authState}>
          <Login />
        </PublicRoute>

        <PrivateRoute path="/User" auth={authState}>
          {!userEmail ? <Verify /> : <UserNavigation />}
        </PrivateRoute>

        <Route path="/SignUp">
          <SignUp />
        </Route>

        <Route path="/Admin">
          <AdminNavigation />
        </Route>
      
      </Switch>

      {history.location.pathname === "/User" ||
      history.location.pathname === "/Admin" ||
      history.location.pathname === "/Login" ||
      history.location.pathname === "/SignUp" ? null : (
        <Footer />
      )}
    </Router>
  );
}
