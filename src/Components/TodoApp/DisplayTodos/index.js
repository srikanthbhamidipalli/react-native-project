import React, { Component } from "react";
import { View, FlatList, Dimensions } from "react-native";
import EachTodo from "./EachTodo";
import { observer } from "mobx-react";
@observer
class DisplayTodos extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <FlatList
          data={this.props.todoAppStore.filterTodos}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <EachTodo todoItem={item} todoAppStore={this.props.todoAppStore} />
          )}
          //contentContainerStyle={{ paddingBottom: 50 }}
          style={{ height: Math.round(Dimensions.get("window").height - 100) }}
        />
      </View>
    );
  }
}
export default DisplayTodos;
