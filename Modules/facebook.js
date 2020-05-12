import React, { Component } from 'react';
import { View ,StatusBar} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import hasnotch from '../Deviceinfo/hasnotch'
import url from '../URL'
export default class Login extends Component {
  render() {
    return (
      <View>

        <View style={{width:10}}>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                    
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")}/>
          </View>
      </View>
    );
  }
};