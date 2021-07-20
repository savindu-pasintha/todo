import React from "react";
import { Route, Switch } from 'react-router-dom';
import Pending from "./Components/Pending/Pending";
import Completed from "./Components/Completed/Completed";
import Edit from './Components/Edit/Edit';
import Search from './Components/Search/Search';

function Routing() {
  return (
    <div >
          <Switch>
            <Route path="/" component={Completed}  exact />
            <Route path="/pending" component={Pending} />
            <Route path="/edit" component={Edit} />
            <Route path="/search" component={Search} />
          </Switch>
    </div>
  );
}

export default Routing;
