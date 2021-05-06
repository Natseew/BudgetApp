import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Image} from 'react-native';
import { Container, Content, Button, Text, Form, Item, Input, Label, Grid, Row, Col, Icon, Right,Header } from 'native-base';

export default function App({navigation}) {
  return (
      <Container>
        <Header/>
        <Content padder>
        Home Page
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
