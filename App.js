import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/page/Home';
import AboutScreen from './src/page/About';
import LoginScreen from './src/page/Login';
import RegisterScreen from './src/page/Register';
import ListScreen from './src/page/List';
import ProfileScreen from './src/page/Profile';

export default class App extends React.Component{
  render(){
    return <AppContainer /> 
  }
}
  const AppNavigator = createStackNavigator({
    Home:{
      screen: HomeScreen
    },
    About:{
      screen: AboutScreen
    },
    Login:{
      screen: LoginScreen
    },
    Register:{
      screen: RegisterScreen
    },
    List:{
      screen: ListScreen
    },
    Profile:{
      screen: ProfileScreen
    }
  });

  const AppContainer = createAppContainer(AppNavigator);

