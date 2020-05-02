import authReducer from '../reducers/auth';
import {createStore, combineReducers,applyMiddleware,compose} from 'redux';
import {blogsReducers} from './../reducers/blogs';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore=()=>{
    const store=createStore(
        combineReducers({
            blogs:blogsReducers,
            auth:authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}