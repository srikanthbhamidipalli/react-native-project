import React, { Component } from "react";
import { BottomNavigation } from "react-native-material-ui";
import { observer } from "mobx-react";

import { View, Text, StyleSheet, Dimensions } from "react-native";

@observer
class FilterBar extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1
    },
    add: {
      bottom: 70
    },
    bottomNav: {
      position: "absolute",
      bottom: 0,
      width: Dimensions.get("window").width
    }
  });

  render() {
    return (
      <View style={this.styles.bottomNav}>
        <BottomNavigation
          active={this.props.todoAppStore.filterName.toLowerCase()}
          hidden={false}
        >
          <BottomNavigation.Action
            key="all"
            icon="list"
            label="all"
            onPress={() => {
              this.props.todoAppStore.setFilterName("All");
              this.props.todoAppStore.isAddButtonClicked = false;
            }}
          />
          <BottomNavigation.Action
            key="active"
            icon="lock-open"
            label="Active"
            onPress={() => {
              this.props.todoAppStore.setFilterName("Active");
              this.props.todoAppStore.isAddButtonClicked = false;
            }}
          />
          <BottomNavigation.Action
            key="completed"
            icon="check-circle"
            label="Completed"
            onPress={() => {
              this.props.todoAppStore.setFilterName("Completed");
              this.props.todoAppStore.isAddButtonClicked = false;
            }}
          />
        </BottomNavigation>
      </View>
    );
  }
}

export default FilterBar;
