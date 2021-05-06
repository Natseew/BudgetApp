import {createStackNavigator} from 'react-navigation-stack'
import Login from '../screens/login'
import Signup from '../screens/signup'
const screens = {
    Login:{
      screen:Login,
      navigationOptions: {
        header: null,
      }
    },
    Signup:{
      screen:Signup,
      navigationOptions: {
        header: null,
      }
    }
}

const LoginStack =  createStackNavigator(screens)

export default LoginStack