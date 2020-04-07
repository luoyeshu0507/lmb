import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export default class extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aaa">Home</NavLink>
        <NavLink to="/vvv">Home</NavLink>
        <NavLink to="/vvv">Home</NavLink>
        <NavLink to="/vvv">Home</NavLink>
      </div>
    );
  }
}