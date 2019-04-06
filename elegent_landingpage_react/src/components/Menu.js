import React from 'react';

const Menu = () => (
  <div className="menu-wrap">
    <input type="checkbox" className="toggler" />
    <div className="hamburger">
      <div className="lines" />
    </div>
    <div className="menu">
      m
      <div>
        <div>
          <ul>
            <li>
              {' '}
              <a href="/">Home</a>{' '}
            </li>
            <li>
              {' '}
              <a href="/">About</a>{' '}
            </li>
            <li>
              {' '}
              <a href="/">Contact</a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
