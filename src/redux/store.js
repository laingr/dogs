import { createStore, combineReducers } from 'redux';
import { dogsReducer, numberOfImagesReducer } from './reducers';

const reducers = combineReducers({
  dogsReducer,
  numberOfImagesReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;