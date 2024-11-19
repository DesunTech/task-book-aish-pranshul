import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../utils/colors";

type RadioButtonOption = {
  categoryName: string;
};

interface RadioButtonProps {
  options: RadioButtonOption[];
  selectedValue: string | number;
  onValueChange: (value: string | number) => void;
  layout?: "row" | "column";
  circleSize?: number;
  selectedColor?: string;
  unselectedColor?: string;
}

const BottomSheet: React.FC<RadioButtonProps> = ({
  options,
  selectedValue,
  onValueChange,
  layout = "column",
  circleSize = 22,
  selectedColor = colors.ligitPrimary,
  unselectedColor = colors.white,
}) => {
  return (
    <View
      style={[
        styles.radioButtonContainer,
        layout === "row" && { flexDirection: "row", flexWrap: "wrap" },
      ]}
    >
      {options.map((option) => (
        <TouchableOpacity
          key={option.categoryName}
          style={styles.radioButtonItem}
          onPress={() => onValueChange(option.categoryName)}
          activeOpacity={0.7}
          accessible={true}
          accessibilityRole="radio"
          accessibilityState={{
            selected: selectedValue === option.categoryName,
          }}
          accessibilityLabel={`Select ${option.categoryName}`}
        >
          <View
            style={[
              {
                width: circleSize,
                height: circleSize,
                borderRadius: circleSize / 2,
                borderWidth: 2,
                borderColor: selectedColor,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: unselectedColor,
              },
              selectedValue === option.categoryName && {
                backgroundColor: selectedColor,
              },
            ]}
          >
            {selectedValue === option.categoryName && (
              <View
                style={{
                  width: circleSize / 2,
                  height: circleSize / 2,
                  borderRadius: circleSize / 4,
                  backgroundColor: unselectedColor,
                }}
              />
            )}
          </View>
          <Text style={styles.radioButtonText}>{option.categoryName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  radioButtonContainer: {
    justifyContent: "flex-start",
  },
  radioButtonItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth :1,
    borderColor: "#0003",
    borderRadius: 10,
  },
  radioButtonText: {
    color: colors.primary,
    marginLeft: 5
  },
});
