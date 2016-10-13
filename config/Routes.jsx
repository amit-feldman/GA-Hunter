import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../client/components/App.jsx';
import Home from '../client/components/Home.jsx';
import Login from '../client/components/Login.jsx';
import SignUp from '../client/components/SignUp.jsx';
import ProjectList from '../client/components/ProjectList.jsx';
import NewProject from '../client/components/NewProject.jsx';
import EditProject from '../client/components/EditProject.jsx';
import requireAuth from '../client/utils/requireAuth.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="signup" component={SignUp} />
        {/* <Route path="projects" component={ProjectList} /> */}
        <Route path="projects/new" component={NewProject} onEnter={requireAuth}/>

        <Route path="projects" component={ProjectList} />
        // <Route path="projects/new/blah" component={NewProject} />

        <Route path="projects/:id/edit" component={EditProject} />
      </Route>
      <Route path="user/:id" component={App}>
        {/* <IndexRoute component={Profile} /> */}
      </Route>
    </Router>
  );
};

export default Routes;
