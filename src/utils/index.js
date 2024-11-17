import {Dimensions} from "react-native";

// Get screen width and height
const {width, height} = Dimensions.get("window");

// Base screen width for scaling (e.g., 360px is often used for design base)
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

// Scale function for scaling values
const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const RFValue = {
  scale,
  verticalScale,
  moderateScale,
};
