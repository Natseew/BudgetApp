import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../screens/login'
import Signup from '../screens/signup'
const screens = {
  Login:{
    screen:Login,
    navigationOptions: {
      header: null,
  },
  },
  Signup:{
    screen:Signup,
    navigationOptions: {
      header: null,
  },
  },
}

const HomeStack =  createStackNavigator(screens)

export default createAppContainer(HomeStack)