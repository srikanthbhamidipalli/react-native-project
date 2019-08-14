import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Vibration
} from "react-native";
import { CheckBox, Text } from "react-native-elements";
import { Button } from "react-native-paper";

import { observable } from "mobx";
import { observer } from "mobx-react";
import TakeTodo from "../../EnterTodo/TakeTodo";
@observer
class EachTodo extends Component {
  @observable checked = this.props.todoItem.isCompleted;
  toggleCheckBox = () => {
    this.checked = !this.checked;
    this.props.todoItem.toggleCompletedStatus();
  };
  handleDeleteClick = () => {
    Alert.alert(
      "Alert Title",
      "Are you sure to delete this todo?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => this.props.todoAppStore.removeTodo(this.props.todoItem)
        }
      ],
      { cancelable: false }
    );
  };
  _onLongPress = () => {
    Vibration.vibrate(100);
    this.props.todoAppStore.setTodoLongPressedStatus(this.props.todoItem);
  };
  render() {
    return (
      <View style={styles.container}>
        {this.props.todoAppStore.isTodoLongPressed &&
        this.props.todoAppStore.todoItemInstance === this.props.todoItem ? (
          <TakeTodo
            todoAppStore={this.props.todoAppStore}
            inputText={this.props.todoItem.description}
            onSubmit={this.props.todoItem.updateTodo}
          />
        ) : (
          <>
            <View>
              <CheckBox checked={this.checked} onPress={this.toggleCheckBox} />
            </View>
            <TouchableOpacity
              style={{ flex: 1 }}
              onLongPress={this._onLongPress}
            >
              <Text
                style={
                  this.checked && {
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid"
                  }
                }
              >
                {this.props.todoItem.description}
              </Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Button
                icon="delete"
                onPress={this.handleDeleteClick}
                style={styles.deleteIcon}
              />
            </View>
          </>
        )}
      </View>
    );
  }
}
export default EachTodo;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white"
    //backgroundColor: "blue",
  },
  deleteIcon: {
    right: 5
  }
});
