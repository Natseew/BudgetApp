import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label, Grid, Row, Col, Icon, Right } from 'native-base';

export default function App({ navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const pressHandler = () => {
    navigation.navigate('Login')
  }
  const signup = () =>{
    let formBody = JSON.stringify({"email":email, "username":username, "password": password})
    fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Access-Control-Allow-Origin': '*',
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
        
      },
    })
      .then((response) => console.log(response))
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
      <Row>
        <Col>
          <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(email) => setEmail(email)}/>
              </Item>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input onChangeText={(username) => setUsername(username)}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={(password) => setPassword(password)}/>
              </Item>
              <Item floatingLabel>
                <Label>Confirm Password</Label>
                <Input onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}/>
              </Item>
            </Form>
          </Col>
        </Row>
      <Row style={{height: 100 }}>
        <Col>
          <Button onPress={signup} block>
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
