import {StyleSheet, View} from "react-native";
import {RFValue} from "../../utils";
import {Scaling} from "../../constants/dimensions";
import {RNText} from "../Text/RNText";
import {Image} from "expo-image";
import {ColorValues} from "../../constants";

export const TrendingCard = ({imageUrl, category, title = "N/A"}) => {
  return (
    <View style={{alignItems: "center", marginHorizontal: Scaling.ten}}>
      {/* Category label at the top-left corner */}
      <View style={styles.categoryContainer}>
        <RNText fontWeight={600} style={styles.categoryText}>
          {category}
        </RNText>
      </View>

      {/* Image */}
      <Image source={{uri: imageUrl}} style={styles.bannerImage} />

      {/* Book Title */}
      <RNText
        numberOfLines={1}
        fontWeight={600}
        style={{
          textAlign: "center",
          marginVertical: Scaling.six,
          maxWidth: RFValue.moderateScale(100),
        }}>
        {title}
      </RNText>
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  categoryContainer: {
    position: "absolute", // Position it absolutely
    top: 10, // Adjust as needed
    left: 10, // Adjust as needed
    zIndex: 4,
    backgroundColor: ColorValues.background.default, // Semi-transparent background for contrast
    padding: Scaling.eight,
    borderRadius: Scaling.eight,
  },
  categoryText: {
    fontSize: RFValue.moderateScale(12), // Adjust size as needed
  },
  bannerImage: {
    borderRadius: 12,
    aspectRatio: 4 / 5,
    height: RFValue.moderateScale(250),
  },
});
