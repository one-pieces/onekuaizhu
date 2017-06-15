import React, { Component } from 'react';
import {
  Badge,
  Card, CardItem,
  Col, Content, Grid, Icon, Right, Row, Text, View
} from 'native-base';

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
        <Grid style={styles.overview.self}>
          <Row style={styles.overview.row}>
            <Col>
              <Text style={styles.text}>累计欠款(元)</Text>
              <Text style={{
                ...styles.text,
                fontSize: 30
              }}>357,200.00</Text>
            </Col>
          </Row>
          <Row style={styles.overview.row}>
            <Col>
              <Text style={styles.text}>昨日实收(元)</Text>
              <Text style={{
                ...styles.text,
                fontSize: 18
              }}>357,200.00</Text>
            </Col>
            <Col>
              <View style={{
                backgroundColor: '#e5e5e5',
                width: 0.5,
                marginTop: 8,
                marginLeft: 50,
                height: 20
              }}></View>
            </Col>
            <Col>
              <Text style={styles.text}>今日实收(元)</Text>
              <Text style={{
                ...styles.text,
                fontSize: 18
              }}>357,200.00</Text>
            </Col>
          </Row>
        </Grid>
        <View style={{
          marginHorizontal: 15,
          marginTop: -30
        }}>
          <Card style={styles.card.self}>
            <CardItem style={styles.card.cardItem} transparent>
              <Text style={styles.card.cardItemText}>一块积分</Text>
              <Right>
                <Icon style={styles.card.cardItemIcon} name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.card.self}>
            <CardItem style={styles.card.cardItem}>
              <View style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                marginRight: 10,
                backgroundColor: 'orange'
              }} />
              <Text style={styles.card.cardItemTitle}>账务</Text>
            </CardItem>
            <CardItem>
              <Text style={styles.card.cardItemText}>房租欠款</Text>
              <Right style={styles.card.cardItemRight}>
                <Badge style={styles.card.cardItemBadge.self}>
                  <Text style={styles.card.cardItemBadge.text}>8笔：5000.00元</Text>
                </Badge>
                <Icon style={styles.card.cardItemIcon} name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem style={styles.card.cardItem}>
              <Text style={styles.card.cardItemText}>退房未结账</Text>
              <Right style={styles.card.cardItemRight}>
                <Badge style={styles.card.cardItemBadge.self}>
                  <Text style={styles.card.cardItemBadge.text}>2笔</Text>
                </Badge>
                <Icon style={styles.card.cardItemIcon} name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
          <Card style={styles.card.self}>
            <CardItem style={styles.card.cardItem}>
              <View style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                marginRight: 10,
                backgroundColor: '#0be543'
              }} />
              <Text style={styles.card.cardItemTitle}>租约</Text>
            </CardItem>
            <CardItem>
              <Text style={styles.card.cardItemText}>房租欠款</Text>
              <Right style={styles.card.cardItemRight}>
                <Badge style={styles.card.cardItemBadge.self}>
                  <Text style={styles.card.cardItemBadge.text}>8笔：5000.00元</Text>
                </Badge>
                <Icon style={styles.card.cardItemIcon} name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem style={styles.card.cardItem}>
              <Text style={styles.card.cardItemText}>退房未结账</Text>
              <Right style={styles.card.cardItemRight}>
                <Badge style={styles.card.cardItemBadge.self}>
                  <Text style={styles.card.cardItemBadge.text}>2笔</Text>
                </Badge>
                <Icon style={styles.card.cardItemIcon} name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </View>
      </Content>
    )
  }
}
const styles = {
  overview: {
    self: {
      backgroundColor: '#007aff',
      paddingTop: 10,
      paddingBottom: 40,
      paddingHorizontal: 40
    },
    row: {
      marginBottom: 30
    }
  },
  card: {
    self: {
      borderRadius: 8,
      marginBottom: 5
    },
    cardItem: {
      borderRadius: 8,
      paddingTop: 10,
      paddingBottom: 12
    },
    cardItemRight: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cardItemTitle: {
      fontSize: 13.5,
      color: '#949494'
    },
    cardItemText: {
      fontSize: 14,
      fontWeight: 'bold'
    },
    cardItemIcon: {
      fontSize: 20
    },
    cardItemBadge: {
      self : {
        backgroundColor: '#eeeeee',
        borderColor: '#e5e5e5',
        marginRight: 10,
        // height: 20,
        borderRadius: 8
      },
      text: {
        color: 'black',
        fontSize: 12,
        // marginTop: -3,
        paddingLeft: 8,
        paddingRight: 8
      }
    }
  },
  text: {
    color: '#ffffff',
    fontSize: 12
  }
};