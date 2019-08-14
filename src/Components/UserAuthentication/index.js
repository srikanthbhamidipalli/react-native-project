import React, { Component } from "react";
import LoginScreen from "./LoginScreen";
import UserHomeScreen from "./UserHomeScreen";
import { Router, Scene } from "react-native-router-flux";
import { AsyncStorage } from "react-native";
import { observer } from "mobx-react";
import SplashScreen from "./SplashScreen";
@observer
class UserAuthentication extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            onChangeText={this.props.store.setTheUsername}
            onPasswordChange={this.props.store.setThePassword}
            onSubmit={this.props.store.validateUser}
            isLoadingStatus={this.props.store.isLoadingStatus}
            key="LoginScreen"
            component={LoginScreen}
            title="LoginScreen"
          />
          <Scene key="splashScreen" component={SplashScreen} initial />
          <Scene
            key="UserScreen"
            component={UserHomeScreen}
            title="UserScreen"
          />
        </Scene>
      </Router>
    );
  }
}
export default UserAuthentication;
