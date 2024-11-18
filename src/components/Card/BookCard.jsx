import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RFValue} from "../../utils";
import {Scaling} from "../../constants/dimensions";
import {RNText} from "../Text/RNText";
import {Image} from "expo-image";
import {ColorValues} from "../../constants";

export const BookCard = ({
  imageUrl,
  title,
  isNewArrival,
  handlePressOnCard,
}) => {
  return (
    <TouchableOpacity onPress={handlePressOnCard}>
      <View style={styles.cardContainer}>
        {/* New Arrival Badge */}
        {isNewArrival && (
          <View style={styles.categoryContainer}>
            <RNText
              color={ColorValues.background.default}
              style={styles.categoryText}>
              {"New Arrival"}
            </RNText>
          </View>
        )}

        {/* Container for image and title */}
        <View style={styles.contentContainer}>
          {/* Image */}
          <Image source={{uri: imageUrl}} style={styles.bannerImage} />

          {/* Title */}
          <View style={styles.textContainer}>
            <RNText numberOfLines={2} fontWeight={500} style={styles.titleText}>
              {title}
            </RNText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: Scaling.ten,
    alignItems: "center",
    backgroundColor: ColorValues.background.card,
    padding: Scaling.six,
    borderRadius: Scaling.six,
    position: "relative", // Required for absolute positioning of the badge
  },
  categoryContainer: {
    position: "absolute", // Position it absolutely
    top: 10, // Adjust as needed
    right: 10, // Adjust as needed
    zIndex: 4,
    backgroundColor: ColorValues.background.button, // Semi-transparent background for contrast
    padding: Scaling.eight,
    borderRadius: Scaling.eight,
  },
  categoryText: {
    fontSize: RFValue.moderateScale(12), // Adjust size as needed
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Scaling.twelve,
  },
  bannerImage: {
    borderRadius: Scaling.six,
    aspectRatio: 4 / 5,
    height: RFValue.moderateScale(140),
  },
  textContainer: {
    marginLeft: Scaling.ten,
    maxWidth: RFValue.moderateScale(110),
  },
  titleText: {
    fontSize: RFValue.moderateScale(14),
    color: ColorValues.text.primary,
  },
});
