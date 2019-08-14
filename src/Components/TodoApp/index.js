import React, { Component } from "react";
import TodosAppHeader from "./TodosAppHeader";
import FilterBar from "./FilterBar";
import EnterTodo from "./EnterTodo";
import { observer } from "mobx-react";
import TakeTodo from "./EnterTodo/TakeTodo";
import DisplayTodos from "./DisplayTodos";
import { View } from "react-native";
@observer
class TodoApp extends Component {
  render() {
    return (
      <>
        <TodosAppHeader
          userStore={this.props.userStore}
          todoAppStore={this.props.todoAppStore}
        />
        {this.props.todoAppStore.isAddButtonClicked ? (
          <TakeTodo
            todoAppStore={this.props.todoAppStore}
            inputText={""}
            onSubmit={this.props.todoAppStore.addTodo}
          />
        ) : (
          <DisplayTodos todoAppStore={this.props.todoAppStore} />
        )}
        <FilterBar todoAppStore={this.props.todoAppStore} />
        <EnterTodo todoAppStore={this.props.todoAppStore} />
      </>
    );
  }
}
export default TodoApp;
