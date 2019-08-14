/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import UserAuthentication from "./src/Components/UserAuthentication";
import UserAuthenticationStore from "./src/Stores/UserAuthenticationStore";
import { Scene, Router } from "react-native-router-flux";
import LoginScreen from "./src/Components/UserAuthentication/LoginScreen";
import SplashScreen from "./src/Components/UserAuthentication/SplashScreen";
import UserHomeScreen from "./src/Components/UserAuthentication/UserHomeScreen";
import { create } from "mobx-persist";
import { AsyncStorage } from "react-native";
import TodoApp from "./src/Components/TodoApp";
import TodoStoreApp from "./src/Stores/TodoAppStore";
const App = () => {
  const hydrate = create({
    storage: AsyncStorage,
    jsonify: true
  });
  const store = new UserAuthenticationStore();
  const todoAppStore = new TodoStoreApp();
  hydrate("userAuth", store);
  hydrate("todoAppStore", todoAppStore);
  return (
    <>
      <Router>
        <Scene key="root">
          <Scene
            onChangeText={store.setTheUsername}
            onPasswordChange={store.setThePassword}
            onSubmit={store.validateUser}
            key="LoginScreen"
            component={LoginScreen}
            title="LoginScreen"
          />
          <Scene
            key="splashScreen"
            component={SplashScreen}
            store={store}
            initial
          />
          <Scene
            key="UserScreen"
            component={TodoApp}
            title=""
            userStore={store}
            todoAppStore={todoAppStore}
          />
        </Scene>
      </Router>
    </>
  );
};

export default App;
