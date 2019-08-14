import React, { Component } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
import { observer } from "mobx-react";

@observer
class UserHomeScreen extends Component {
  _removeItem = () => {
    try {
      this.props.userStore.isUserLoggedIn = false;
      Actions.LoginScreen({ type: ActionConst.REPLACE });
      // await AsyncStorage.removeItem("isUserLoggedIn");
    } catch (error) {
      // Error saving data
    }
  };
  render() {
    return (
      <View>
        <Text>Welcome to @iBHubs@</Text>
        <Button title="logout" onPress={this._removeItem} />
      </View>
    );
  }
}
export default UserHomeScreen;
