import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignupLoginScreen from './screens/SignupLoginScreen';

export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}

const TabNavigator = createBottomTabNavigator({
  SignupLogin : {screen: SignupLoginScreen}
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "red",
    alignItems : "center",
    justifyContent : "center"
  }
});