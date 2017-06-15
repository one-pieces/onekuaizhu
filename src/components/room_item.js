import React, { Component } from 'react';
import {Col, Text, View} from "native-base";

const STATUS_CLASS_MAP = {
  // 空置中
  0: {
    background: '#B4EEB4',
    label: '#43CD80',
  },
  // 住客房
  1: {
    background: '#63B8FF',
    label: '#1C86EE'
  },
  // 装修中
  2: {
    background: '#FFEC8B',
    label: '#EEB422'
  }
};

export default class RoomItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { room, index } = this.props;
    console.log(room);
    return (
      <Col key={index} style={{
        ...styles.room,
        backgroundColor: STATUS_CLASS_MAP[room.status].background
      }}>
        <View style={{
          ...styles.roomLabel,
          backgroundColor: STATUS_CLASS_MAP[room.status].label
        }}>
          <Text style={styles.roomLabelText}>{room.name}</Text>
        </View>
        <View style={styles.roomPrice}>
          <Text style={{fontSize: 12}}>￥{room.price}.00</Text>
        </View>
      </Col>
    );
  }
}

const styles = {
  room: {
    width: '29%',
    height: 100,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    marginBottom: 10,
    alignItems:'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  roomLabel: {
    paddingVertical: 3,
    width: '75%',
    height: 20,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  roomLabelText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center'
  },
  roomPrice: {
    paddingVertical: 4,
    width: '100%',
    alignItems:'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: 'white'
  }
}