import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Wizard from "../src/components/Wizard/Wizard";
import Image from "./components/Image/Image";
import NewListing from "./components/NewListing/NewListing";
import House from "../src/components/House/House";
import Header from "../src/components/Header/Header";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Wizard} path="/wizard" />
    <Route component={Image} path="/wizard2" />
    <Route component={NewListing} path="/wizard3" />
  </Switch>
);
