import { DEC, INC } from '../actions/index';

const initialState = {
  count: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INC:
      const newState = { ...state };
      newState.count++;
      return newState;
    case DEC:
      const newState2 = { ...state };
      newState2.count--;
      return newState2;
    default:
      return state;
  }
}
