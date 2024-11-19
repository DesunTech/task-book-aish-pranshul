import {Animated} from "react-native";
import {RFValue} from "../../../utils";
import {useState} from "react";

export const useExpandCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const heightAnim = useState(new Animated.Value(RFValue.moderateScale(80)))[0];
  const toggleCard = () => {
    setIsOpen(prevState => !prevState);
    Animated.timing(heightAnim, {
      toValue: isOpen ? RFValue.moderateScale(70) : RFValue.moderateScale(180),
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  return {
    isOpen,
    heightAnim,
    setIsOpen,
    toggleCard,
  };
};

export default useExpandCard;
