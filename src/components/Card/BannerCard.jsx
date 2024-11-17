import {Image} from "expo-image";
import React from "react";
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Scaling} from "../../constants/dimensions";
import {ColorValues, StringValues} from "../../constants";
import {RNText} from "../Text/RNText";
import {RFValue} from "../../utils";

// Function to format price in the Indian numbering format
const formatPrice = price => {
  return `₹${price?.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ",")}`;
};

export const CardBanner = ({imageUrl, price, onReadMore}) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.bannerImage}
        transition={500}
        contentFit="cover"
      />

      {/* Overlay Content */}
      <View style={styles.overlay}>
        {/* Price Section */}
        <View style={styles.priceContainer}>
          <RNText style={styles.price}>{formatPrice(price)}</RNText>
        </View>

        {/* Read More Button */}
        <TouchableOpacity style={styles.readMoreButton} onPress={onReadMore}>
          <RNText fontWeight={600} style={styles.readMoreText}>
            {StringValues.ReadMore}
          </RNText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: Scaling.eight,
    backgroundColor: ColorValues.background.default,
    marginHorizontal: Scaling.eight,
    marginBottom: Scaling.eight,
    shadowColor: ColorValues.background.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  bannerImage: {
    aspectRatio: 16 / 9,
    borderRadius: Scaling.eight,
    height: RFValue.moderateScale(180),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire image
    justifyContent: "space-between",
    padding: Scaling.eight,
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Subtle dark overlay for better readability
  },
  priceContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for the price
    paddingHorizontal: Scaling.ten,
    paddingVertical: Scaling.six,
    borderRadius: Scaling.eight,
    alignSelf: "flex-start", // Positioned at the top left
  },
  price: {
    fontSize: Scaling.fourteen, // Responsive font size
  },
  readMoreButton: {
    alignSelf: "flex-end",
    backgroundColor: ColorValues.background.button, // Vibrant red button
    padding: Scaling.eight,
    borderRadius: Scaling.eight,
  },
  readMoreText: {
    color: ColorValues.background.default,
    padding: Scaling.two,
  },
});
