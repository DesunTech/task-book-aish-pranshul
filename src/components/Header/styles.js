import {StyleSheet} from "react-native";
import {ColorValues} from "../../constants";
import {Scaling} from "../../constants/dimensions";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorValues.background.default,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Scaling.eight,
    paddingVertical: Scaling.eight,
  },
  icon: {
    color: ColorValues.text.primary,
    marginRight: Scaling.two,
  },
  title: {
    marginLeft: Scaling.ten,
    fontSize: Scaling.twelve,
    marginRight: 10,
  },
  titleWithoutBack: {
    marginLeft: 0,
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
