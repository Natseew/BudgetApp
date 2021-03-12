import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet,Text, TextInput, View, Image } from 'react-native';

export default function App({ navigation}) {

  const pressHandler = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Image></Image>
      <Text>Username</Text>
      <TextInput/>

      <Text>Password</Text>
      <TextInput/>

      <Button
        title="Sign Up"
        onPress={()=> console.log("Pressed")}
      ></Button>
      <Text onPress={pressHandler}>Back to Login</Text>
      <StatusBar style="auto" />
    </View>
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
