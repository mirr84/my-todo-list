import React from 'react';

import {Route, Switch} from 'react-router-dom';
import {connector} from "../store/utils/simpleConnector";

const Main = () => <div>Main</div>
const Page404 = () => <div>Page404</div>

const App = () =>
  <div>

    <Switch>
        <Route exact path={"/"} component={Main}/>
        <Route component={Page404}/>
    </Switch>

  </div>

export default App;
