import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { /* images */ } from './components/images/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  /*images*/
});

const async = store => next => action => { // eslint-disable-line
  if(typeof action === 'function') {
    action(store.dispatch, store.getState);
  }
  else {
    return next(action);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  ));

export default store;