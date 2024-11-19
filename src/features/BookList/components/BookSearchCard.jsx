import {Image} from "expo-image";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {RNText} from "../../../components";
import {ColorValues, StringValues} from "../../../constants";
import {Scaling} from "../../../constants/dimensions";

export const BookSearchCard = ({title, imageLinks, authors, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.bookItem}>
        {imageLinks?.thumbnail ? (
          <Image
            source={{uri: imageLinks.thumbnail}}
            style={styles.bookImage}
            contentFit="cover"
          />
        ) : (
          <View style={styles.placeholderImage} />
        )}
        <View style={styles.bookInfo}>
          <RNText numberOfLines={1} size={Scaling.fourteen} fontWeight={700}>
            {title}
          </RNText>
          <RNText>
            {authors ? authors.join(", ") : StringValues.UnKnownAuthor}
          </RNText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: "row",
    marginBottom: Scaling.ten, // Dynamic margin bottom
    alignItems: "center",
  },
  bookImage: {
    aspectRatio: 1 / 1,
    height: Scaling.ten * 7,
    marginRight: Scaling.ten, // Dynamic margin
    borderRadius: Scaling.six, // Dynamic border radius
  },
  placeholderImage: {
    width: Scaling.ten * 5,
    height: Scaling.ten * 7,
    marginRight: Scaling.ten,
    backgroundColor: ColorValues.background.border,
    borderRadius: Scaling.six,
  },
  bookInfo: {
    flexDirection: "column",
  },
});
