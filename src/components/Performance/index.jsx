import React from 'react';
import { SecurityScanOutlined } from '@ant-design/icons';
import './style.scss';

export default function() {
  return (
    <div className="performance">
      <div className="title">
        <div className="label">业绩</div>
        <div className="sub">
          <div>
            <span>总业绩</span>
            <em>500,000,000 Q币</em>
          </div>
          <div>
            <span>本月业绩</span>
            <em>5,000,000 Q币</em>
          </div>
        </div>
      </div>
      <div className="perf-search-label">业绩查询</div>
      <div className="perf-item">
        <SecurityScanOutlined />
        一区查询
        <em>**多</em>
      </div>
      <div className="perf-item">
        <SecurityScanOutlined />
        二区查询
        <em>**多</em>
      </div>
    </div>
  );
}