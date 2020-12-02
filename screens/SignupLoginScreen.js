import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView, ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class SignupLoginScreen extends Component{
  constructor(){
    super()
    this.state = {
      username : '',
      password : ''
    }
  }

  userSignUp = (username, password) =>{
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then((response)=>{
      return Alert.alert("User Successfully Added")
    })
    .catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }

  userLogin = (username, password) =>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
      return Alert.alert("Successfully Logged In")
    })
    .catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }

  render(){
    return(
      <View style = {{alignItems : 'center'}}>
        <Text style = {{color : '#ff5722', fontSize : 18, fontWeight : 'bold', marginLeft : 55}}>Username</Text>
        <TextInput
          style = {styles.loginBox}
          keyboardType = 'email-address'
          onChangeText = {(text)=>{
            this.setState({
              username : text
            })
          }}
        />
        <Text style = {{color : '#ff5722', fontSize : 18, fontWeight : 'bold', marginLeft : 55}}>Password</Text>
        <TextInput
          style = {style.loginBox}
          secureTextEntry = {true}
          onChangeText = {(text)=>{
            this.setState({
              password : text
            })
          }}
        />
        <TouchableOpacity
          style = {[styles.button, {marginBottom : 10}]}
          onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}  
        >
          <Text style = {{color : '#ff5722', fontSize : 18, fontWeight : 'bold'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {[styles.button, {marginBottom : 10}]}
          onPress = {()=>{this.userSignUp(this.state.username, this.state.password)}}  
        >
          <Text style = {{color : '#ff5722', fontSize : 18, fontWeight : 'bold'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  loginBox : {
    width: 300,
    height: 40,
    borderBottomWidth: 1.5,
    borderColor : '#ff8a65',
    fontSize: 20,
    margin:10,
    paddingLeft:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
  },
})
