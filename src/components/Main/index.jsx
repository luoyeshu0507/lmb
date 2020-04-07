import React from 'react';
import Nav from '@components/Nav';
import Content from '@components/Content';
import './style.scss';

export default function() {
  return (
    <div className="app">
      <Content />
      <Nav />
    </div>
  );
}