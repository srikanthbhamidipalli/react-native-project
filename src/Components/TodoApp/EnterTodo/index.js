import React, { Component } from "react";
import ActionButton from "react-native-action-button";
import { observer } from "mobx-react";
@observer
class EnterTodo extends Component {
  render() {
    return (
      <>
        <ActionButton
          buttonColor="#6200ee"
          hideShadow={true}
          offsetX={20}
          offsetY={70}
          onPress={() => {
            this.props.todoAppStore.setAddButtonClickedStatus();
          }}
        />
      </>
    );
  }
}
export default EnterTodo;
