import React from 'react';
import './style.scss';
import {
  TransactionOutlined,
  RightOutlined
} from '@ant-design/icons';

export default function() {
  return (
    <div className="profile">
      <div className="title">
        <div className="user-img"></div>
        <div className="user-name">
          钱多多 <span>(五星)</span>
        </div>
        <div className="user-id">ID: 123456788</div>
      </div>
      <div className="white-block">
        <a href="#">
          <TransactionOutlined />
          <span>个人信息</span>
          <RightOutlined />
        </a>
      </div>
      <div className="white-block">
        <a href="#">
          <TransactionOutlined />
          <span>收货地址</span>
          <RightOutlined />
        </a>
      </div>
      <div className="white-block">
        <a href="#">
          <TransactionOutlined />
          <span>我的银行卡</span>
          <RightOutlined />
        </a>
      </div>
      <div className="white-block">
        <a href="#">
          <TransactionOutlined />
          <span>App 下载</span>
          <RightOutlined />
        </a>
      </div>
      <div className="white-block">
        <a href="#">
          <TransactionOutlined />
          <span>密码修改</span>
          <RightOutlined />
        </a>
      </div>
    </div>
  );
}