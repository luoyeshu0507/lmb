import React, { Component } from 'react';
import './style.scss';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from '@components/Home';
import Trade from '@components/Trade';
import Performance from '@components/Performance';
import News from '@components/News';
import Profile from '@components/Profile';

export default class extends Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route path="/home" component={ Home }/>
          <Route path="/trade" component={ Trade }/>
          <Route path="/performance" component={ Performance }/>
          <Route path="/news" component={ News }/>
          <Route path="/profile" component={ Profile }/>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    );
  }
}