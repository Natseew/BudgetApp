import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/home'
const screens = {
    Home:{
      screen:Home,
      navigationOptions: {
        header: null,
      }
    },
}

const HomeStack =  createStackNavigator(screens)

export default HomeStack