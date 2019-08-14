import React, { Component } from "react";
import { CheckBox } from "react-native-elements";
import { View, StyleSheet, TextInput } from "react-native";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { Button } from "react-native-paper";

@observer
class TakeTodo extends Component {
  @observable checked = false;
  @observable inputText = this.props.inputText;
  handleSubmit = () => {
    this.props.onSubmit(this.inputText);

    this.props.todoAppStore.isAddButtonClicked = false;
    this.props.todoAppStore.isTodoLongPressed = false;
    this.inputText = "";
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <CheckBox
            checked={this.checked}
            onPress={() => {
              this.checked = !this.checked;
            }}
          />
        </View>
        <View>
          <TextInput
            placeholder="What needs to be done?"
            onChangeText={text => {
              this.inputText = text;
            }}
            value={this.inputText}
            onSubmitEditing={
              this.inputText.trim() === "" ? null : this.handleSubmit
            }
          />
        </View>
        <View>
          <Button
            style={styles.deleteIcon}
            icon="delete"
            onPress={() => {
              console.log("delete");
            }}
          />
        </View>
      </View>
    );
  }
}
export default TakeTodo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f6f6f6"
  },
  checkbox: {
    width: 50
  },
  deleteIcon: {
    left: -15
  }
});
