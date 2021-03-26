import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label, Grid, Row, Col, Icon, Right } from 'native-base';

export default function App({ navigation}) {

  const pressHandler = () => {
    navigation.navigate('Login')
  }
  return (
    <Container>
    <Content padder>
    <Grid>
    <Row style={{height: 200 }}>
      <Button transparent>
          <Image></Image>
      </Button>
    </Row>
      <Row style={{height: 300 }}>
        <Col>
          <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input/>
              </Item>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input/>
              </Item>
              <Item floatingLabel>
                <Label>Confirm Password</Label>
                <Input/>
              </Item>
            </Form>
          </Col>
        </Row>
      <Row style={{height: 100 }}>
        <Col>
          <Button block>
            <Text>Register</Text>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Text onPress={pressHandler}>Back to Login</Text>
        </Col>
        <Col>
          <Right>
            <Text>Forget Password</Text>
          </Right>
        </Col>
      </Row>
      
    </Grid>
    </Content>
  </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
