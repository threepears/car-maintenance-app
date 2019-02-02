import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Car Maintenance App</h1>
    <NavLink to="/" activeClassName="is-active" exact >Dashboard</NavLink>
    <NavLink to="/auth" activeClassName="is-active">Login</NavLink>
  </header>
);

export default Header;