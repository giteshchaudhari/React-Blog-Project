// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import authReducer from '../reducers/auth';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default () => {
//   const store = createStore(
//     combineReducers({
//       auth: authReducer
//     }),
//     composeEnhancers(applyMiddleware(thunk))
//   );

//   return store;
// };
import {createStore, combineReducers} from 'redux';
import {blogsReducers} from './../reducers/blogs';

export const configureStore=()=>{
    const store=createStore(
        combineReducers({
            blogs:blogsReducers
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
}