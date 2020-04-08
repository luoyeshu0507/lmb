import React from 'react';
import './style.scss';
import {
  TransactionOutlined
} from '@ant-design/icons';

export default function() {
  return (
    <div className="home">
      <div className="title">趣生活商业系统</div>
      <div className="white-block">
        <div className="white-block-title">
          <span>账户管理</span>
          <em>- ACCOUNTS MANAGE -</em>
        </div>
        <div className="service-list">
          <a href="#">
            <TransactionOutlined />
            <em>账户查询</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>交易记录</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>转账</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>提现</em>
          </a>
        </div>
      </div>
      <div className="white-block">
        <div className="white-block-title">
          <span>业绩查询</span>
          <em>- PERFORMANCE QUERY -</em>
        </div>
        <div className="service-list">
          <a href="#">
            <TransactionOutlined />
            <em>业绩查询</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>一区查询</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>二区查询</em>
          </a>
        </div>
      </div>
      <div className="white-block">
        <div className="white-block-title">
          <span>资料管理</span>
          <em>- INFORMANCE MANAGE -</em>
        </div>
        <div className="service-list">
          <a href="#">
            <TransactionOutlined />
            <em>资料查询</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>订单查询</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>收货地址</em>
          </a>
          <a href="#">
            <TransactionOutlined />
            <em>银行卡管理</em>
          </a>
        </div>
      </div>
    </div>
  );
}