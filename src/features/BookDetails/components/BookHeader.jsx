import {ImageBackground, StyleSheet, View} from "react-native";
import {ColorValues, StringValues} from "../../../constants";
import {Scaling} from "../../../constants/dimensions";
import {Header, RNText} from "../../../components";
import {formatDate} from "../../../utils";

export const BookHeader = ({
  title,
  subtitle,
  authors = [],
  publishedDate,
  publisher,
  backgroundImage,
}) => {
  return (
    <ImageBackground
      source={
        backgroundImage
          ? {uri: backgroundImage}
          : require("../../../../assets/dummy_book.jpg")
      }
      style={{flex: 1, pointerEvents: "none"}}>
      <Header
        backIcon
        containerStyle={{
          backgroundColor: "transparent",
        }}
        iconStyle={{
          color: ColorValues.background.default,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: 4,
        }}
      />

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
    </ImageBackground>
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
