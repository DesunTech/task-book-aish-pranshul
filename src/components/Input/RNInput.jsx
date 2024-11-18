import {MaterialIcons} from "@expo/vector-icons";
import {ActivityIndicator, StyleSheet, TextInput, View} from "react-native";
import {Scaling} from "../../constants/dimensions";
import {ColorValues, FontFamilyLiterata} from "../../constants";
import {useNavigation} from "@react-navigation/native";

export const RNInput = ({
  placeholder,
  value,
  onChangeText,
  loading,
  handleClearText,
  ...rest
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.inputContainer}>
      <MaterialIcons
        name="arrow-back"
        size={Scaling.ten * 2}
        color={ColorValues.text.heading}
        style={styles.icon}
        onPress={() => navigation.goBack()}
      />
      <TextInput
        {...rest}
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor={ColorValues.text.body}
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.rightIconContainer}>
        {loading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : value ? (
          <MaterialIcons
            name="close"
            size={Scaling.ten * 2}
            color={ColorValues.text.heading}
            onPress={handleClearText}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: ColorValues.background.border,
    borderRadius: 5,
    paddingLeft: Scaling.six,
    paddingRight: Scaling.six,
    marginBottom: Scaling.ten,
  },
  searchInput: {
    flex: 1,
    fontSize: Scaling.fourteen,
    paddingVertical: Scaling.eight,
    fontFamily: FontFamilyLiterata[400],
    color: ColorValues.text.body,
  },
  icon: {
    marginRight: Scaling.six,
  },
  rightIconContainer: {
    marginLeft: Scaling.six,
  },
});
