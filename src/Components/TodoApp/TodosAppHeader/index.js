import React, { Component } from "react";
import { observer } from "mobx-react";
import { View, Dimensions, Text, Button } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
@observer
class TodosAppHeader extends Component {
  _removeItem = () => {
    try {
      console.log("inlog");
      this.props.userStore.isUserLoggedIn = false;
      Actions.LoginScreen({ type: ActionConst.REPLACE });
      console.log(this.props.userStore.isUserLoggedIn);
      // await AsyncStorage.removeItem("isUserLoggedIn");
    } catch (error) {
      // Error saving data
    }
  };
  render() {
    return (
      <>
        <View>
          <View
            style={{
              backgroundColor: "#6200ee",
              height: 40,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: Math.round(Dimensions.get("screen").width),
              top: 0
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              TODO'S APP{" "}
            </Text>
            <Button title="logout" onPress={this._removeItem} />
          </View>
        </View>
      </>
    );
  }
}
export default TodosAppHeader;
