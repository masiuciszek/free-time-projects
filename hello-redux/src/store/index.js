import { createStore } from 'redux';
import reducer from '../reducers';

const initilizeState = { tech: 'React'};
export const store = createStore(reducer,
  initilizeState)