import React, { Component } from 'react';
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  TransactionOutlined
} from '@ant-design/icons';
import './style.scss';

export default class extends Component {
  state = {
    showMoney: true,
    money: 50000000
  };

  render() {
    return (
      <div className="trade">
        <div className="title">
          <div className="label">
            余额 <em>(Q币)</em>
            <span onClick={ this.toggleShowMoney.bind(this) }>
              { this.state.showMoney? <EyeOutlined />: <EyeInvisibleOutlined /> }
            </span>
          </div>
          <div className="value">
            { this.formatedMoney }
          </div>
        </div>
        <div className="white-block">
          <div className="underlined-title">交易</div>
          <div className="money-control">
            <div className="transfer">
              <TransactionOutlined />转账
            </div>
            <div className="widthdraw">
              <TransactionOutlined />提现
            </div>
          </div>
        </div>
        <div className="white-block">
          <div className="underlined-title">查询</div>
          <div className="trade-log">交易记录</div>
        </div>
      </div>
    );
  }

  toggleShowMoney() {
    this.setState({
      showMoney: !this.state.showMoney
    })
  }

  get formatedMoney() {
    let reg = /(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
    let money = this.state.money || 0;
    if (this.state.showMoney) {
      return money.toString().replace(reg, "$1,");
    } else {
      return '******';
    }
  }
}