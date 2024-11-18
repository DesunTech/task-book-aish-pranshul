import {Text, View} from "react-native";
import {ColorValues, FontFamilyLiterata} from "../../constants";
import {Scaling} from "../../constants/dimensions";
/**
 * RNText is a custom text component that wraps the React Native `Text` component.
 *
 * You can pass any props supported by the React Native `Text` component.
 *
 * @param {object} props - Props for the RNText component.
 * @param {number} [props.size=16] - Font size for the text.
 * @param {number} [props.fontWeight=400] - Font weight for the text.
 * @param {React.ReactNode} props.children - The content to display inside the text.
 * @param {object} [props.style] - Additional styles to apply to the text.
 */

export const RNText = props => {
  const {
    size = Scaling.ten,
    fontWeight = 400,
    color = ColorValues.text.body,
    children,
    ...textProps
  } = props;
  return (
    <>
      <Text
        {...textProps}
        style={[
          {
            color: color,
            fontFamily: FontFamilyLiterata[fontWeight],
            fontSize: size,
          },
          textProps?.style,
        ]}>
        {children}
      </Text>
    </>
  );
};
