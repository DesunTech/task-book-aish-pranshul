import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    backgroundColor: colors.primary,
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: colors.black,
    borderRadius: 5,
  },
  searchInput: {
    width: "90%",
    borderWidth: 0,
  },
  iconContainer: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '500'
  },
});

export default styles;
