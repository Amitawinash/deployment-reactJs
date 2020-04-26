import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {history} from '../_helpers';
import {DeploymentsPage} from '../_pages/DeploymentsPage';
import {TemplatePage} from '../_pages/TemplatePage';
import Header from '../_components/header/Header'

function App() {
  return (
    <div>
      <Router history={history}>
        <Header>head</Header>
        <Switch>
          <Route path="/deployments" component={DeploymentsPage}/>
          <Route path="/template" component={TemplatePage}/>
          <Redirect from="*" to="/deployments"/>
        </Switch>
      </Router>
    </div>
  );
}

export {App};