import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../commonComponent/navigationBar/NavigationBar";
import Login from '../modules/auth/login/Login'
import SignUp from "../modules/auth/signUp/SignUp";
import Home from "../modules/home/Home";
import Footer from "../commonComponent/footer/Footer";
import AdminNavigation from "../modules/Admin/adminNavigation/AdminNavigation";
export default function Navigation() {
  return (
    <Router>
        <NavigationBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Login">
        <Login/>
        </Route>

        <Route path="/SignUp">
        <SignUp/>
        </Route>
        <Route path="/Admin">
        <AdminNavigation/>
        </Route>
        

      </Switch>
      {/* <Footer/> */}
      
    </Router>
  );
}
