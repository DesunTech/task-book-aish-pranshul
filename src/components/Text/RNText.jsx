import { Text } from "react-native";
import { ColorValues } from "../../constants";
export const RNText = (props) => {
  const { size = 16, fontWeight = 400, children, ...textProps } = props;
  return (
    <View>
      <Text
        {...textProps}
        style={[
          {
            color: ColorValues.text.body,
            fontFamily: fontFamilyPoppins[fontWeight],
            fontSize: size,
          },
          textProps?.style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};
