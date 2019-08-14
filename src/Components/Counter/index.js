import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { observer } from "mobx-react";
@observer
class Counter extends Component {
  _onPressIncrement = () => {
    this.props.counterStore.incrementCounter();
  };
  _onPressDecrement = () => {
    this.props.counterStore.decrementCounter();
  };
  render() {
    return (
      <View>
        <Text>{this.props.counterStore.getCounterValue}</Text>
        <Button
          onPress={this._onPressIncrement}
          title="Increment"
          type="outline"
        />
        <Button
          onPress={this._onPressDecrement}
          title="Decrement"
          type="outline"
          disabled={this.props.counterStore.getCounterValue <= 0}
        />
      </View>
    );
  }
}
export default Counter;
