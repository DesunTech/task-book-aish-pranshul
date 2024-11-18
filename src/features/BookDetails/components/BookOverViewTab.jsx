import {View} from "react-native";
import React from "react";
import {TouchableOpacity, Animated, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {ColorValues} from "../../../constants";
import useExpandCard from "../hooks/useExpandCard";
import {RNText} from "../../../components";

export const BookOverViewTab = () => {
  const {isOpen, toggleCard, heightAnim} = useExpandCard();

  return (
    <View style={styles.card}>
      <Animated.View style={[styles.cardContent, {height: heightAnim}]}>
        <View style={styles.row}>
          <View style={styles.column}>
            <RNText style={styles.text}>Column 1 Text</RNText>
          </View>
          <View style={styles.column}>
            <RNText style={styles.text}>Column 2 Text</RNText>
          </View>
        </View>
      </Animated.View>

      <TouchableOpacity style={styles.toggleButton} onPress={toggleCard}>
        <MaterialCommunityIcons
          name={isOpen ? "chevron-down" : "chevron-up"}
          size={24}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: "97%",
    backgroundColor: ColorValues.background.default,
    borderRadius: 8,
    marginVertical: 10,
    marginLeft: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
  },
  cardContent: {
    padding: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  toggleButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
