import {View} from "react-native";
import {ColorValues, StringValues} from "../../../constants";
import {Scaling} from "../../../constants/dimensions";
import {RNText} from "../../../components";

export const BookHeader = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: ColorValues.background.lavender,
          paddingHorizontal: 20,
          marginHorizontal: 8,
          paddingVertical: 8,
          borderRadius: 4,
        }}>
        <RNText fontWeight={700} size={Scaling.sixteen}>
          Title
        </RNText>
        <RNText>Subtitle</RNText>
        <RNText>{StringValues.Author}:</RNText>
        <RNText>{StringValues.Publisher}</RNText>
      </View>
      <View
        style={{
          backgroundColor: ColorValues.background.lavender,
          paddingHorizontal: 20,
          marginHorizontal: 8,
          marginVertical: 8,
          paddingVertical: 8,
          borderRadius: 4,
        }}>
        <RNText>{StringValues.PublishedDate}:</RNText>
      </View>
    </View>
  );
};
