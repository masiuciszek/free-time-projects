import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import reducer from './reducer/reducers';

const store = createStore(reducer);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    );
  }
}
