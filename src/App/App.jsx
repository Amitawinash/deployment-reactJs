import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from '../_helpers';
import {DeploymentsPage} from '../_pages/DeploymentsPage';
import {DeploymentTable} from '../_pages/DeploymentTable';
import {TemplatePage} from '../_pages/TemplatePage';
import Header from '../_components/header/Header';
import Test1 from '../_components/test1/index';
import Test2 from '../_components/test2/index';

function App() {
  return (
    <div>
      <Router history={history}>
        <Header>head</Header>
        <Switch>
          <Route path="/test1" component={Test1}/>
          <Route path="/article" component={Test2}/>
          <Route path="/deployment" component={DeploymentsPage}/>
          <Route path="/deployments" component={DeploymentTable}/>
          <Route path="/template" component={TemplatePage}/>
          <Redirect from="*" to="/deployment"/>
        </Switch>
      </Router>
    </div>
  );
}

export {App};