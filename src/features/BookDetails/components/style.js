import {StyleSheet} from "react-native";
import {ColorValues} from "../../../constants";
import {Scaling} from "../../../constants/dimensions";

export const styles = StyleSheet.create({
  card: {
    maxWidth: "97%",
    backgroundColor: ColorValues.background.default,
    borderRadius: 8,
    marginVertical: 10,
    marginLeft: 8,
    elevation: 1,
    shadowColor: ColorValues.text.body,
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
  },
  cardContent: {
    padding: Scaling.six,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    padding: 10,
  },
  label: {
    color: ColorValues.text.muted,
    marginTop: Scaling.ten,
    fontSize: Scaling.twelve,
  },
  text: {},
  toggleButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: ColorValues.background.lightGrey,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
