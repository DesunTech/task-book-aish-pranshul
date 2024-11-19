import React from "react";
import {View, StyleSheet} from "react-native";
import {RNText} from "../Text/RNText";

export const EmptyComponent = ({message = "No data available"}) => {
  return (
    <View style={styles.container}>
      <RNText>{message}</RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
