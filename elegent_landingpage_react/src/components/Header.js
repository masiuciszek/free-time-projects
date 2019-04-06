import React from 'react';

const Header = props => (
  <header className="showcase">
    <div className="container showcase-inner">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <a className="cta" href="#">
        {props.cta}
      </a>
    </div>
  </header>
);

export default Header;
