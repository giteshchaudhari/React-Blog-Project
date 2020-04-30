import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from './store/configureStore';
import {addBlog} from  './actions/blogs';
import {AppRouter} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import AppRouter, { history } from './routers/AppRouter';
// import { login, logout } from './actions/auth';

// import 'react-dates/lib/css/_datepicker.css';
// import { firebase } from './firebase/firebase';
// import LoadingPage from './components/LoadingPage';

// const store = configureStore();
// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );
// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, document.getElementById('app'));
//     hasRendered = true;
//   }
// };

// ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     renderApp();
//     if (history.location.pathname === '/') {
//       history.push('/dashboard');
//     }
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push('/');
//   }
// });





const store=configureStore()

store.dispatch(addBlog({title:'first title',description:'first project'}));
store.dispatch(addBlog({title:'second title',description:'first project'}));
store.dispatch(addBlog({title:'third title',description:'first project'}));
store.dispatch(addBlog({title:'fourth title',description:'first project'}));
const jsx=(
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('app'));



