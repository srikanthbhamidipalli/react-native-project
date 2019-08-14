import { observable, action, computed } from "mobx";
import TodoModel from "../../Models/TodoModel";
import { persist } from "mobx-persist";

class TodoAppStore {
  @observable isAddButtonClicked = false;
  @persist("list", TodoModel) @observable todoList = [];
  @persist @observable filterName = "All";
  @observable isTodoLongPressed = false;
  @observable todoItemInstance = null;

  @action.bound setAddButtonClickedStatus() {
    this.isAddButtonClicked = !this.isAddButtonClicked;
  }
  @action.bound setTodoLongPressedStatus(todoItem) {
    this.isTodoLongPressed = !this.isTodoLongPressed;
    this.todoItemInstance = todoItem;
  }

  @action.bound setFilterName(filterName) {
    this.filterName = filterName;
  }
  @action.bound removeTodo(eachTodo) {
    this.todoList = this.todoList.filter(todoItem => todoItem !== eachTodo);
  }
  @action.bound addTodo(todoDesc) {
    const todoItem = new TodoModel();
    todoItem.initializer(todoDesc);
    this.todoList = [...this.todoList, todoItem];
  }
  @computed get filterTodos() {
    if (this.filterName === "All") {
      return this.todoList;
    } else if (this.filterName === "Active")
      return this.todoList.filter(todoItem => !todoItem.isCompleted);
    else return this.todoList.filter(todoItem => todoItem.isCompleted);
  }
}

export default TodoAppStore;
