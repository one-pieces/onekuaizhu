import React, { Component } from 'react';
import Tab1 from './tabs/tab1';
import OpTabs from '../../components/op_tabs';

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.tabConfig = [{
      value: null,
      label: '全部'
    }, {
      value: 0,
      label: '欠款'
    }, {
      value: 1,
      label: '未收款'
    }, {
      value: 2,
      label: '已收款'
    }];
    this.state = {
      tabs: this.tabConfig
    };
  }

  render() {
    return (
      <OpTabs dataArray={this.tabConfig}
              renderContent={(item) => <Tab1 status={item.value} />} />
    )
  }
}