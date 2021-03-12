import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet,Text, TextInput, View, Image} from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';

export default function App({navigation}) {

  const pressHandler = () => {
    navigation.navigate('Signup')
  }
  
  return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
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
