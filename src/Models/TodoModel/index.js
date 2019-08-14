import { observable } from "mobx";
import { persist } from "mobx-persist";

class TodoModel {
  @persist @observable isCompleted;
  @persist id;
  @persist key;
  @persist @observable description;
  initializer = description => {
    this.id = Date.now();
    this.key = this.id.toString();
    this.description = description;
    this.isCompleted = false;
  };
  toggleCompletedStatus = () => {
    this.isCompleted = !this.isCompleted;
  };
  updateTodo = newDesc => {
    this.description = newDesc;
  };
}

export default TodoModel;
