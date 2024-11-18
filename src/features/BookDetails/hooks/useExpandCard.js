import {Animated} from "react-native";
import {RFValue} from "../../../utils";
import {useState} from "react";

export const useExpandCard = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track open/close
  const heightAnim = useState(new Animated.Value(100))[0];
  const toggleCard = () => {
    setIsOpen(prevState => !prevState);
    Animated.timing(heightAnim, {
      toValue: isOpen ? RFValue.moderateScale(100) : RFValue.moderateScale(200),
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
