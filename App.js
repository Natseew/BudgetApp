import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './routes/homeStack.js'
import LoginStack from './routes/loginStack.js'

function Home({ navigation }) {
  return HomeStack
}
function Login({ navigation }) {
  return LoginStack
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.screen name="Home" component={HomeScreen}/>
    </NavigationContainer>
    
  );
}
