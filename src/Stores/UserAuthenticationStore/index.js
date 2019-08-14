import { observable, action } from "mobx";
import { Actions, ActionConst } from "react-native-router-flux";
import { Alert, AsyncStorage } from "react-native";
import { persist } from "mobx-persist";

class UserAuthenticationStore {
  @persist @observable username = "";
  @persist @observable password = "";
  @persist @observable isUserLoggedIn = false;
  //@observable isLoadingStatus = false;

  @action.bound setTheUsername(text) {
    this.username = text;
  }
  @action.bound setThePassword(text) {
    this.password = text;
  }
  _storeData = async value => {
    try {
      await AsyncStorage.setItem("isUserLoggedIn", value);
    } catch (error) {
      // Error saving data
    }
  };
  @action.bound validateUser() {
    //this.isLoadingStatus = true;
    if (this.username === this.password) {
      setTimeout(() => {
        //  this.isLoadingStatus = false;
        //this._storeData("true");
        this.isUserLoggedIn = true;
        Actions.UserScreen({ type: ActionConst.REPLACE });
      }, 2000);
    } else {
      //this.isLoadingStatus = false;
      Alert.alert(
        "Alert Title",
        "Invalid Credentials",
        [
          {
            text: "OK",
            onPress: () => {
              this.username = "";
              this.password = "";
            },
            style: "OK"
          }
        ],
        { cancelable: false }
      );
    }
  }
}

export default UserAuthenticationStore;
