import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeOutlined,
  HomeFilled,
  TransactionOutlined,
  PayCircleFilled,
  LineChartOutlined,
  FundFilled,
  FileTextOutlined,
  FileTextFilled,
  UserOutlined,
} from '@ant-design/icons';
import './style.scss';

export default class extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink to="/home">
          <HomeOutlined />
          <HomeFilled />
          <em>首页</em>
        </NavLink>
        <NavLink to="/trade">
          <TransactionOutlined />
          <PayCircleFilled />
          <em>交易</em>
        </NavLink>
        <NavLink to="/performance">
          <LineChartOutlined />
          <FundFilled />
          <em>业绩</em>
        </NavLink>
        <NavLink to="/news">
          <FileTextOutlined />
          <FileTextFilled />
          <em>资讯</em>
        </NavLink>
        <NavLink to="/profile">
          <UserOutlined />
          <UserOutlined />
          <em>我的</em>
        </NavLink>
      </div>
    );
  }
}