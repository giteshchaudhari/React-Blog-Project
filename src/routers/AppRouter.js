import React from 'react';
import {Router , Switch, Route} from 'react-router-dom';
import {BlogDashboardPage} from './../components/BlogDashboardPage';
import EditBlogPage from './../components/EditBlogPage';
import AddBlogPage from './../components/AddBlogPage';
import {NotFoundPage} from './../components/NotFoundPage';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history=createHistory();

export const AppRouter=()=>(
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={BlogDashboardPage} />
        <PrivateRoute path="/create" component={AddBlogPage} />
        <PrivateRoute path="/edit/:id" component={EditBlogPage}/>
        <Route component={NotFoundPage}/>      
      </Switch>
    </div>
  </Router>
);
