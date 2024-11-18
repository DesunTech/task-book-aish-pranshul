import React from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import {RNText} from "../Text/RNText";
import {Scaling} from "../../constants/dimensions";
import {ColorValues} from "../../constants";

export const RadioButton = ({options, selectedValue, onValueChange}) => {
  return (
    <View style={styles.radioButtonContainer}>
      {options.map(option => (
        <TouchableOpacity
          key={option.categoryValue}
          style={styles.radioButtonItem}
          onPress={() => onValueChange(option.categoryValue)}
          activeOpacity={0.7} // Provides feedback on touch
        >
          <View
            style={[
              styles.radioButtonCircle,
              selectedValue === option.categoryValue && styles.selectedCircle,
            ]}>
            {selectedValue === option.categoryValue && (
              <View style={styles.selectedInnerCircle} />
            )}
          </View>
          <RNText size={Scaling.fourteen} style={styles.radioButtonText}>
            {option.categoryName}
          </RNText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  radioButtonItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioButtonCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: ColorValues.background.button,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorValues.background.default,
  },
  selectedCircle: {
    backgroundColor: ColorValues.background.button,
  },
  selectedInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: ColorValues.background.default,
  },
});
