import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools, EnhancerOptions } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import movies from './movies';

const composeEnhancers = composeWithDevTools || compose;

export default createStore(
  combineReducers({ movies }),
  composeEnhancers(applyMiddleware(thunk) as EnhancerOptions),
);
