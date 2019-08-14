import React, { Component } from "react";
import { TextInput, Button, View, Alert, StyleSheet } from "react-native";
// import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  _onPressEvent = () => {
    Alert.alert(this.state.text);
  };
  render() {
    return (
      <>
        <TextInput
          style={{
            height: 40,
            width: 180,
            borderColor: "yellow",
            borderWidth: 1,
            marginBottom: 5
          }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={this._onPressEvent}
          title="Solid Button"
          type="outline"
        />
      </>
    );
  }
}
export default InputBox;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
