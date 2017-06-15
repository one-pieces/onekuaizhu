import React, { Component } from 'react';
import {
  Container, Content, Text, Card, Header, Body, Button, Title, CardItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class PageTwo extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>PageTwo</Text>
          </Body>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
              <Text>This is Page Two, Press button to goto page one</Text>
              </Body>
            </CardItem>
          </Card>
          <Button drak bordered style={{ alignSelf: 'center', margin: 30}}
                  onPress={() => {Actions.pop()}}>
            <Text>Goto Page 1</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}