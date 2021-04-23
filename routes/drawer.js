import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack.js'
import LoginStack from './loginStack.js'

const RootDrawerNavigator = createDrawerNavigator({
  Login:{
    screen: LoginStack,
  },
  Home:{
    screen: HomeStack,
  }
})

export default createAppContainer(RootDrawerNavigator)