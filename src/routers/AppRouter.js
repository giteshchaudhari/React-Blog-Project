import React from 'react';
import {BrowserRouter, Router , Switch, Route} from 'react-router-dom';
import {Header} from './../components/Header';
import {BlogDashboardPage} from './../components/BlogDashboardPage';
import EditBlogPage from './../components/EditBlogPage';
import AddBlogPage from './../components/AddBlogPage';
import {NotFoundPage} from './../components/NotFoundPage';
// import createHistory from 'history/createBrowserHistory';
// import LoginPage from '../components/LoginPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

// export const history = createHistory();
// const AppRouter = () => (
//   <Router history={history}>
//     <div>
//       <Switch>
//         <PublicRoute path="/" component={LoginPage} exact={true} />
//         <PrivateRoute path="/dashboard" component={DashboardPage} />
//         <Route component={NotFoundPage} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default AppRouter;

export const AppRouter=()=>(
  <BrowserRouter>
    <div>
    <Header/>
      <Switch>
        <Route path="/" component={BlogDashboardPage} exact={true}/>
        <Route path="/create" component={AddBlogPage} />
        <Route path="/edit/:id" component={EditBlogPage}/>
        <Route component={NotFoundPage}/>      
      </Switch>
    </div>
  </BrowserRouter>

)