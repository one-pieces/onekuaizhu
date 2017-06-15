import React, { Component } from 'react';
import {
  Text, List, ListItem, Grid, Col, Card, CardItem, View
} from 'native-base';
import ReceivableItem from '../../../components/receivable_item';

export default class AccountTab extends Component {
  constructor(props) {
    super(props);
    // 应收款
    this.accountReceivables = [{
      id: '1',
      dateDue: '2016.10.18',
      status: 2,   // 0: 欠款, 1: 未收款, 2: 已收款
      deposit: 2100,  // 房租押金
      details: [{
        type: 0,
        label: '实收',
        date: '2016.10.13',
        description: 'POS机',
        amount: 2100
      }, {
        type: 1,
        label: '抵扣',
        date: '2016.10.13',
        description: '退房抵扣',
        amount: 1300
      }],
      tenant: { // 租客
        id: '1',
        name: '顾云峰',
        address: '凯迪克大厦19栋90单元1202',
        phone: '13802930934'
      }
    }, {
      id: '2',
      dateDue: '2016.10.18',
      status: 2,   // 0: 欠款, 1: 未收款, 2: 已收款
      deposit: 2500,  // 房租押金
      details: [{
        type: 0,
        label: '实收',
        date: '2016.10.13',
        description: 'POS机',
        amount: 2500
      }, {
        type: 1,
        label: '抵扣',
        date: '2016.10.13',
        description: '退房抵扣',
        amount: 1300
      }],
      tenant: { // 租客
        id: '1',
        name: '顾云峰',
        address: '凯迪克大厦19栋90单元1202',
        phone: '13802930934'
      }
    }, {
      id: '3',
      dateDue: '2016.10.18',
      status: 2,   // 0: 欠款, 1: 未收款, 2: 已收款
      deposit: 2500,  // 房租押金
      details: [{
        type: 0,
        label: '实收',
        date: '2016.10.13',
        description: 'POS机',
        amount: 2500
      }, {
        type: 1,
        label: '抵扣',
        date: '2016.10.13',
        description: '退房抵扣',
        amount: 1300
      }],
      tenant: { // 租客
        id: '1',
        name: '顾云峰',
        address: '凯迪克大厦19栋90单元1202',
        phone: '13802930934'
      }
    }, {
      id: '4',
      dateDue: '2016.10.18',
      status: 2,   // 0: 欠款, 1: 未收款, 2: 已收款
      deposit: 2500,  // 房租押金
      details: [{
        type: 0,
        label: '实收',
        date: '2016.10.13',
        description: 'POS机',
        amount: 2500
      }, {
        type: 1,
        label: '抵扣',
        date: '2016.10.13',
        description: '退房抵扣',
        amount: 1300
      }],
      tenant: { // 租客
        id: '1',
        name: '顾云峰',
        address: '凯迪克大厦19栋90单元1202',
        phone: '13802930934'
      }
    }];

    this.accountOverview = [{
      value: 'all',
      label: '账单合计',
      account: 3690
    }, {
      value: 'received',
      label: '实收合计',
      account: 4640
    }, {
      value: 'bad',
      label: '坏账合计',
      account: 2380
    }];

    this.state = {
      data: [],
      nextPageUrl: '',
      isRefreshing: false,
    }
  }

  _renderAccountOverView() {
    return this.accountOverview.map((item) => {
      return (
        <Col key={item.value}>
          <Text style={
            styles.count.label
          }>{item.label}</Text>
          <Text style={{
            textAlign: 'center'
          }}>￥{item.account}.00</Text>
        </Col>
      );
    });
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <List>
          <ListItem itemDivider style={{
            ...styles.countLabelListItem.self,
            justifyContent: 'center'
          }}>
            <Text style={styles.countLabelListItem.text}>
              —————————— 财务统计{this.props.status} ——————————
            </Text>
          </ListItem>
          <ListItem itemDivider style={styles.countListItem.self}>
            <Card style={styles.countListItem.card}>
              <CardItem style={styles.countListItem.cardItem}>
                <Grid>
                  {this._renderAccountOverView()}
                </Grid>
              </CardItem>
            </Card>
          </ListItem>
        </List>
        <List
          dataArray={this.state.data}
          renderRow={(rowData) => <ReceivableItem rowData={rowData}></ReceivableItem>} />
      </View>
    )
  }

  //页面渲染完成后会主动回调该方法
  componentDidMount() {
    console.log('time1==> ' + new Date().valueOf() + ' componentDidMount');
    this.setState({
      data: this.accountReceivables
    });
  }
}

const styles = {
  countLabelListItem: {
    self: {
      paddingTop: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 8
    },
    text: {
      color: '#8E8E8E',
      fontSize: 12,
    }
  },
  countListItem: {
    self: {
      paddingTop: 0,
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 14
    },
    card: {
      marginTop: 0, marginBottom: 0
    },
    cardItem: {
      paddingLeft: 0, paddingRight: 0,
      paddingTop: 15, paddingBottom: 10
    }
  },
  // 财务统计
  count: {
    label: {
      textAlign: 'center',
      fontSize: 10,
      color: '#6F798F',
      fontWeight: 'bold',
      marginBottom: 5
    }
  }
};