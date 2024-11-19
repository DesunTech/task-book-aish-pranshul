import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";

export default function EmptyScreen(props: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={require("../assets/empty.png")}
      />
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          fontWeight: 600,
          color: colors.primary,
        }}
      >
        {props?.message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
