import {StyleSheet, View} from "react-native";
import {ColorValues, StringValues} from "../../../constants";
import {Scaling} from "../../../constants/dimensions";
import {RNText} from "../../../components";
import {formatDate} from "../../../utils";

export const BookHeader = ({
  title,
  subtitle,
  authors = [],
  publishedDate,
  publisher,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <RNText fontWeight={700} numberOfLines={1} size={Scaling.sixteen}>
          {title}
        </RNText>
        {subtitle && <RNText>{subtitle}</RNText>}
        <RNText>
          {StringValues.Author} : {authors.join(",")}
        </RNText>
        <RNText>
          {StringValues.Publisher} : {publisher}
        </RNText>
      </View>
      <View style={[styles.container, {marginTop: Scaling.eight}]}>
        <RNText>
          {StringValues.PublishedDate} :{" "}
          {publishedDate ? formatDate(publishedDate) : "N/A"}
        </RNText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorValues.background.lavender,
    paddingHorizontal: Scaling.eight,
    marginHorizontal: Scaling.six,
    paddingVertical: Scaling.six,
    borderRadius: 4,
  },
});
