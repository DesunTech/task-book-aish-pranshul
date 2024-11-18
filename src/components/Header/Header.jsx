import {View} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {RNText} from "../Text/RNText";
import {Scaling} from "../../constants/dimensions";
import {styles} from "./styles";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";

/**
 * Header Component
 * A customizable header with options for a title, back icon, search icon, and filter icon.
 *
 * Props:
 * - `title`: (string) The title text displayed in the header.
 * - `onPress`: (function) Function to handle back button press.
 * - `backIcon`: (boolean) Whether to display the back button.
 * - `searchIcon`: (boolean) Whether to display the search icon.
 * - `filterIcon`: (boolean) Whether to display the filter icon.
 * - `handleOnPressFilter`: (function) Function to handle filter button press.
 */
export const Header = ({
  title,
  onPress,
  backIcon,
  searchIcon,
  filterIcon,
  handleOnPressFilter,
  containerStyle,
  iconStyle,
}) => {
  // Safe area view either working on android or ios, to handle that uses insets
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top * 0.1},
        {...containerStyle},
      ]}>
      <View style={styles.innerContainer}>
        <View style={styles.innerContainer}>
          {backIcon && (
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={2 * Scaling.fourteen}
              onPress={() => (onPress ? onPress : navigation.goBack())}
              style={[styles.icon, {...iconStyle}]}
            />
          )}
          {title && (
            <RNText
              fontWeight={600}
              style={[styles.title, !backIcon && styles.titleWithoutBack]}>
              {title}
            </RNText>
          )}
        </View>
        <View style={styles.rightIconsContainer}>
          {searchIcon && (
            <AntDesign
              name="search1"
              size={2 * Scaling.fourteen}
              style={styles.icon}
              onPress={() => {
                navigation.navigate("SearchScreen");
              }}
            />
          )}
          {filterIcon && (
            <MaterialIcons
              name="filter-list"
              size={2 * Scaling.fourteen}
              style={styles.icon}
              onPress={handleOnPressFilter}
            />
          )}
        </View>
      </View>
    </View>
  );
};
