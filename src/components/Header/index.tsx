import { Fontisto, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";

const Header = ({ onSearch, openFilter }: any) => {
  const [searchbox, setSearchbox] = useState(false);

  const openSearchBox = () => {
    setSearchbox(true);
  };

  const closeSearchBox = () => {
    setSearchbox(false);
  };

  return (
    <View style={styles.header}>
      {searchbox == false ? (
        <Ionicons name="menu" size={24} color="#fff" />
      ) : null}

      {searchbox == true ? (
        <View style={styles.searchContainer}>
          <TouchableOpacity
            onPress={closeSearchBox}
            style={styles.iconContainer}
          >
            <Ionicons name="return-up-back-outline" size={24} color="#0009" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            onChangeText={onSearch}
          />
        </View>
      ) : null}

      {searchbox == false ? (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={openSearchBox}
            style={styles.iconContainer}
          >
            <Fontisto name="search" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={openFilter} style={styles.iconContainer}>
            <Ionicons name="filter" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
