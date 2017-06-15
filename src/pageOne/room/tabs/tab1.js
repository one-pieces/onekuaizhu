import React, { Component } from 'react';
import {
  Content, Text, List, ListItem, Icon, Grid
} from 'native-base';
import RoomItem from '../../../components/room_item';

export default class TabOne extends Component {
  constructor(props) {
    super(props);
    this.unitList = [{
      address: '嘉禾小区-6栋'
    }]
    this.rooms = [{
      name: '16单元1302',
      price: 2600,
      status: 0
    }, {
      name: '1302',
      price: 2600,
      status: 2
    }, {
      name: '16单元1304',
      price: 2600,
      status: 1
    }, {
      name: '1305',
      price: 2600,
      status: 1
    }, {
      name: '1101',
      price: 2600,
      status: 1
    }, {
      name: 'ROOM-2',
      price: 2600,
      status: 2
    }];
  }

  _renderRoomList() {
    return this.rooms.map((room, index) => {
      return (
        <RoomItem room={room} key={index}></RoomItem>
      )
    });
  }
  render() {
    return (
      <Content>
        <List>
          <ListItem itemDivider>
            <Icon style={{fontSize: 14, marginRight: 10}} name='apps'/>
            <Text style={{fontSize: 14}}>嘉禾小区-6栋{this.props.status}</Text>
          </ListItem>
          <ListItem>
            <Grid style={styles.roomContainer}>
              {this._renderRoomList()}
            </Grid>
          </ListItem>
        </List>
      </Content>
    )
  }
}

const styles = {
  roomContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  }
};