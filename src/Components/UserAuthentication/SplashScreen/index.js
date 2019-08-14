import React, { Component } from "react";
import { View, AsyncStorage, StyleSheet, Text } from "react-native";
import { Actions, ActionConst } from "react-native-router-flux";
import { observer } from "mobx-react";

@observer
class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      //  this._retrieveData("isUserLoggedIn");
      this.checkStatus();
    }, 2000);
  }
  checkStatus = () => {
    console.log(this.props.store.isUserLoggedIn);
    if (this.props.store.isUserLoggedIn) {
      Actions.UserScreen({ type: ActionConst.REPLACE });
    } else {
      Actions.LoginScreen({ type: ActionConst.REPLACE });
    }
  };
  //   _retrieveData = async key => {
  //     try {
  //       const value = await AsyncStorage.getItem(key);
  //       if (value === "true") {
  //         Actions.UserScreen({ type: ActionConst.REPLACE });
  //       } else {
  //         Actions.LoginScreen({ type: ActionConst.REPLACE });
  //       }
  //     } catch (error) {}
  //   };
  render() {
    return (
      <View style={styles.container}>
        <Text>SplashScreen</Text>
      </View>
    );
  }
}
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});
