import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Archives from "./pages/Archives";
import Home from "./pages/Home";
import Trash from "./pages/Trash";

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/archives'>
        <Archives />
      </Route>
      <Route path='/trash'>
        <Trash />
      </Route>
    </Switch>
  );
}
