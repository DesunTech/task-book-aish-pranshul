import {View} from "react-native";
import React from "react";
import {TouchableOpacity, Animated} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {StringValues} from "../../../constants";
import useExpandCard from "../hooks/useExpandCard";
import {RNText} from "../../../components";
import {Scaling} from "../../../constants/dimensions";
import {styles} from "./style";

export const BookOverViewTab = ({
  bookId,
  categories = [],
  language,
  price,
  numberOfPages,
  description,
}) => {
  const {isOpen, toggleCard, heightAnim} = useExpandCard();

  return (
    <>
      <View style={styles.card}>
        <Animated.View style={[styles.cardContent, {height: heightAnim}]}>
          <View style={styles.row}>
            <View style={styles.column}>
              <RNText style={styles.label}>{StringValues.BookId}</RNText>
              <RNText style={styles.text}>{bookId}</RNText>
              <RNText style={styles.label}>{StringValues.Language}</RNText>
              <RNText style={styles.text}>{language}</RNText>
              <RNText style={styles.label}>{StringValues.Categories}</RNText>
              <RNText style={styles.text}>{categories.join(",")}</RNText>
            </View>
            <View style={styles.column}>
              <RNText style={styles.label}>{StringValues.Price}</RNText>
              <RNText style={styles.text}>{price ? price : "N/A"}</RNText>
              <RNText style={styles.label}>{StringValues.NumberOfPages}</RNText>
              <RNText style={styles.text}>{numberOfPages}</RNText>
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
      {description && (
        <View style={[styles.card, {marginTop: Scaling.fourteen}]}>
          <View style={[styles.cardContent]}>
            <RNText fontWeight={600} size={Scaling.twelve}>
              {StringValues.Description} :
              <RNText size={Scaling.twelve}> {description}</RNText>
            </RNText>
          </View>
        </View>
      )}
    </>
  );
};
