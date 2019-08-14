import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
  AsyncStorage,
  Alert
} from "react-native";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class LoginScreen extends Component {
  @observable isLoadingStatus = false;
  onChangeText = text => {
    this.props.onChangeText(text);
  };
  onPasswordChange = text => {
    this.props.onPasswordChange(text);
  };
  onPressLogin = () => {
    this.isLoadingStatus = true;
    this.props.onSubmit();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>username</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="username"
          onChangeText={this.onChangeText}
        />
        <Text>password</Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={true}
          placeholder="password"
          onChangeText={this.onPasswordChange}
        />
        <Button
          onPress={this.onPressLogin}
          title="Login"
          testID="login"
          disabled={this.isLoadingStatus}
        />
        {this.isLoadingStatus && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    width: 200,
    padding: 10,
    marginBottom: 10
  }
});
