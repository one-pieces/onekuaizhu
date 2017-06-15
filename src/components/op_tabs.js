import React, { Component } from 'react';
import {Tab, Tabs} from "native-base";

export default class OpTabs extends Component {
  constructor(props) {
    super(props);
  }

  renderTabs() {
    return this.props.dataArray.map((item) =>
      <Tab key={item.value}
           heading={item.label}
           textStyle={styles.tab.baseText}
           activeTextStyle={styles.tab.activeText}
           activeTabStyle={styles.tab.activeTab}
           tabStyle={styles.tab.base}>
        {this.props.renderContent(item)}
      </Tab>
    )
  }

  render() {
    return (
      <Tabs>
        {this.renderTabs()}
      </Tabs>
    )
  }
}

const styles = {
  tab: {
    base: {
      backgroundColor: 'white'
    },
    baseText: {
      color: '#6a6a6a',
      fontSize: 14
    },
    activeTab: {
      backgroundColor: '#f6f6f6'
    },
    activeText: {
      color: '#007aff',
      fontSize: 14,
      borderBottomColor: '#000'
    }
  }
}