import { observable, action, computed } from "mobx";

class CounterStore {
  @observable counterValue = 0;
  @action.bound incrementCounter() {
    this.counterValue += 1;
  }
  @action.bound decrementCounter() {
    this.counterValue -= 1;
  }
  @computed get getCounterValue() {
    return this.counterValue;
  }
}

export default CounterStore;
