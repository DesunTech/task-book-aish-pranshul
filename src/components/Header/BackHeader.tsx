import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const Header = ({ onPress, title }: any) => {
  return (
    <View style={[styles.header, {justifyContent: 'flex-start'}]}>
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <Ionicons name="chevron-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text  style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {title?.length > 35 ? `${title.substring(0, 35)}...` : title}
      </Text>
    </View>
  );
};

export default Header;
