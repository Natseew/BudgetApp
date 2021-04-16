import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label, Grid, Row, Col, Icon, Right,Header } from 'native-base';

export default function App({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const pressHandler = () => {
    navigation.navigate('Signup')
  };
  const login = () => {
    let dataToSend = JSON.stringify({"username" : username, "password" : password});
    fetch('http://localhost:3000/user/login', {
      method: 'POST',
      body: dataToSend,
      headers: {
        //Header Defination
        'Access-Control-Allow-Origin': '*',
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
        
      },
    })
      .then((response) => console.log(response))
  };
  

  return (
      <Container>
        <Header/>
        <Content padder>
        <Grid>
        <Row style={{height: 200 }}>
          <Button transparent>
              <Image></Image>
          </Button>
        </Row>
          <Row style={{height: 200 }}>
            <Col>
              <Form>
                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input 
                       onChangeText={(username) =>
                        setUsername(username)
                      }/>
                  </Item>
                  <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                      onChangeText={(password) =>
                        setPassword(password)
                      }/>
                  </Item>
                </Form>
              </Col>
            </Row>
          <Row style={{height: 100 }}>
            <Col>
              <Button onPress={login} block>
                <Text>Login</Text>
              </Button>
            </Col>
          </Row>
          <Row>
        <Col>
          <Text onPress={pressHandler}>Register</Text>
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
