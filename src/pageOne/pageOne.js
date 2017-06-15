import React, { Component } from 'react';
import {
  Container, Content, Text, Card, Header, Body, Button, CardItem,
  Footer, FooterTab, Icon, View
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Room from './room/room';
import Account from './account/account';
import Overview from './overview/overview';

const TAB_DATA = [{
  value: 'overview',
  label: '概览',
  icon: 'apps'
}, {
  value: 'room',
  label: '房源',
  icon: 'camera'
}, {
  value: 'account',
  label: '账务',
  icon: 'navigate'
}, {
  value: 'me',
  label: '我的',
  icon: 'person'
}];

export default class PageOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: TAB_DATA[0]
    };
  }

  renderContent() {
    if (this.state.activeTab == TAB_DATA[1]) {
      return (
        <Room tab={this.state.activeTab} />
      );
    } else if (this.state.activeTab == TAB_DATA[2]) {
      return (
        <Account />
      );
    } else {
      return (
        <Overview />
      )
    }
  }

  renderFooterTab() {
    return TAB_DATA.map((item) => {
      return (
        <Button
          style={
            this.state.activeTab == item ? styles.navButton.active : styles.navButton.base
          }
          key={item.value}
          active={this.state.activeTab == item}
          onPress={() => this.setState({
            activeTab: item
          })}>
          <Icon
            style={
              this.state.activeTab == item ? styles.navItem.active : styles.navItem.base
            } name={item.icon} />
          <Text
            style={
              this.state.activeTab == item ? styles.navItem.active : styles.navItem.base
            }>{item.label}</Text>
        </Button>
      );
    })
  }

  render() {
    return (
      <Container>
        <Header hasTabs style={{backgroundColor: '#007aff'}}>
          <Body>
            <Text style={{color: 'white'}}>{this.state.activeTab.label}</Text>
          </Body>
        </Header>
        <View style={{
          flex: 1,
          backgroundColor: '#f1f1f1'
        }}>
          {this.renderContent()}
        </View>
        <Footer>
          <FooterTab>
            {this.renderFooterTab()}
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = {
  navButton: {
    base: {
      backgroundColor: '#ffffff',
      borderRadius: 0
    },
    active: {
      backgroundColor: '#cde1f9',
      borderRadius: 0
    }
  },
  navItem: {
    base: {
      color: '#6a6a6a',
    },
    active: {
      color: '#007aff',
    }
  }
}