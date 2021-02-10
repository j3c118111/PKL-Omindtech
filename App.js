import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/page/Home';
import AboutScreen from './src/page/About';
import LoginScreen from './src/page/Login';
import RegisterScreen from './src/page/Register';
import ListProfileScreen from './src/page/ListProfile';
import ListKaryawanScreen from './src/page/ListKaryawan';
import ListTokoScreen from './src/page/ListToko';
import ProfileScreen from './src/page/Profile';
import KaryawanMainScreen from './src/page/KaryawanMain';
import KaryawanReadScreen from './src/page/KaryawanRead';
import DetailListKaryawanScreen from './src/page/DetailListKaryawan';
import TokoScreen from './src/page/Toko';
import DetailListTokoScreen from './src/page/DetailListToko';

export default class App extends React.Component{
  componentDidMount(){
    SplashScreen.hide();
  }
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
    Profile:{
      screen: ProfileScreen
    },
    ListProfile:{
      screen: ListProfileScreen
    },
    KaryawanMain:{
      screen: KaryawanMainScreen
    },
    KaryawanRead:{
      screen: KaryawanReadScreen
    },
    ListKaryawan:{
      screen: ListKaryawanScreen
    },
    DetailListKaryawan:{
      screen: DetailListKaryawanScreen
    },
    Toko:{
      screen: TokoScreen
    },
    ListToko:{
      screen: ListTokoScreen
    },
    DetailListToko:{
      screen: DetailListTokoScreen
    }
  });

  const AppContainer = createAppContainer(AppNavigator);

