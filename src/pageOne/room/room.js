import React, { Component } from 'react';
import Tab1 from './tabs/tab1';
import OpTabs from '../../components/op_tabs';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.tabConfig = [{
      value: null,
      label: '全部'
    }, {
      value: 0,
      label: '未出租'
    }, {
      value: 1,
      label: '已出租'
    }, {
      value: 2,
      label: '装修中'
    }];
  }

  render() {
    return (
      <OpTabs dataArray={this.tabConfig}
              renderContent={(item) => <Tab1 status={item.value} />} />
    )
  }
}