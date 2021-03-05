import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../screens/login'
import Signup from '../screens/signup'
const screens = {
  Login:{
    screen:Login
  },
  Signup:{
    screen:Signup
  },
}

const HomeStack =  createStackNavigator(screens)

export default createAppContainer(HomeStack)