export default function posts(state = [], action){
  switch (action.type) {
    case 'INCREMENT':
      console.log('increment likes');
      const i = action.index;
      return [
          ...state.slice(0 , i),
          {...state[i], likes: state[i].likes + 1},
          ...state.slice(i + 1)
      ];
    default:
    return state;
  }
}