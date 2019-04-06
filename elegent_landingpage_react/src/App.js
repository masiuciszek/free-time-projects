import React, { Component } from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import './sass/main.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <Menu />
        <Header
          title="Awsome Landing Page"
          text="lorem lorem"
          cta="get in touch"
        />
      </>
    );
  }
}
