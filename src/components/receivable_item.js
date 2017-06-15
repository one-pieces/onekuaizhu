import React, { Component } from 'react';
import {Card, CardItem, Grid, Icon, Left, ListItem, Right, Row, Text, View} from "native-base";

const RECEIVABLES_STATUS_MAP = {
  0: '欠款',
  1: '未收款',
  2: '已收款'
};

export default class receivableItem extends Component {
  constructor(props) {
    super(props);
  }

  _renderAccountReceivableDetail(receivable) {
    const { receivableItem } = styles;
    return receivable.details.map((detail, index) => {
      return (
        <Row key={index} style={{
          justifyContent: 'space-between',
          marginBottom: 3
        }}>
          <Text style={receivableItem.itemMiddleDetail.text}>{detail.label}</Text>
          <Text style={receivableItem.itemMiddleDetail.text}>{detail.date}</Text>
          <Text style={receivableItem.itemMiddleDetail.text}>{detail.description}</Text>
          <Text style={receivableItem.itemMiddleDetail.text}>￥{detail.amount}.00</Text>
        </Row>
      );
    })
  }
  render() {
    const { receivableItem } = styles;
    return (
      <ListItem key={this.props.rowData.id} itemDivider style={receivableItem.self}>
        <Card style={{
          marginTop: 0, marginBottom: 0
        }}>
          <CardItem style={receivableItem.itemTop}>
            <Left>
              <Text style={{
                fontSize: 13,
                marginLeft: 0
              }}>应收款日：{this.props.rowData.dateDue}</Text>
            </Left>
            <Right style={receivableItem.itemTopRight.self}>
              <Icon style={receivableItem.itemTopRight.icon} name="checkmark-circle" active/>
              <Text style={receivableItem.itemTopRight.text}>{RECEIVABLES_STATUS_MAP[this.props.rowData.status]}</Text>
            </Right>
          </CardItem>
          <CardItem style={receivableItem.itemMiddle.self}>
            <Grid>
              <Row style={{marginBottom: 10}}>
                <Left>
                  <Text style={receivableItem.itemMiddle.depositLabel}>房租押金</Text>
                  <Text style={receivableItem.itemMiddle.depositTip}>惠</Text>
                </Left>
                <Right>
                  <Text style={{
                    fontSize: 20
                  }}>￥{this.props.rowData.deposit}.00</Text>
                </Right>
              </Row>
              <View style={receivableItem.itemMiddleDetail.self}>
                {this._renderAccountReceivableDetail(this.props.rowData)}
              </View>
            </Grid>
          </CardItem>
          <CardItem style={receivableItem.itemBottom}>
            <Left>
              <Text style={receivableItem.itemBottomLeft.text}>{this.props.rowData.tenant.address}</Text>
            </Left>
            <Right style={receivableItem.itemBottomRight.self}>
              <Text style={{
                fontSize: 12
              }}>{this.props.rowData.tenant.name}</Text>
              <Icon style={receivableItem.itemBottomRight.icon} name="call" active/>
            </Right>
          </CardItem>
        </Card>
      </ListItem>
    );
  }
}

const styles = {
  // 应收款列表
  receivableItem: {
    self: {
      paddingTop: 0,
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 8,
      flex: 1
    },
    itemTop: {
      backgroundColor: '#FFFFF5',
      paddingTop: 5,
      paddingBottom: 5
    },
    itemTopRight: {
      self: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      icon: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5
      },
      text: {
        color: '#007aff',
        fontSize: 12,
        fontWeight: 'bold'
      }
    },
    itemMiddle: {
      self: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#e5e5e5'
      },
      depositLabel: {
        fontSize: 13,
        marginLeft: 0
      },
      depositTip: {
        width: 16,
        height: 16,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        padding: 2,
        backgroundColor: 'orange'
      }
    },
    itemMiddleDetail: {
      self: {
        paddingVertical: 3,
        paddingHorizontal: 5,
        backgroundColor: '#FFFBFB'
      },
      text: {
        fontSize: 12,
        color: '#8E8E8E'
      }
    },
    itemBottom: {
      paddingTop: 5,
      paddingBottom: 5
    },
    itemBottomLeft: {
      text: {
        fontSize: 12,
        marginLeft: 0
      }
    },
    itemBottomRight: {
      self: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      icon: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5
      }
    }
  }
}