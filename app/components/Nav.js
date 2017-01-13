import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav id="mainNav" className="navbar navbar-default navbar-custom" style={{ backgroundColor: '#000' }}>
    <div className="container">
      <div className="navbar-header page-scroll">
        <Link to="/" className="navbar-brand page-scroll">Toimi raato</Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="ukkelit" className="page-scroll">Ukkelit</Link>
          </li>
          <li>
            <Link to="team" className="page-scroll">Team</Link>
          </li>
          <li>
            <Link to="settings" className="page-scroll">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
