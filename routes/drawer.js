import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './homeStack.js'
import LoginStack from './loginStack.js'

function Home({ navigation }) {
  return HomeStack
}
function Login({ navigation }) {
  return LoginStack
}
const Drawer = createDrawerNavigator();