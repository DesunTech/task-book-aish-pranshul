import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {useEffect} from "react";

const useInitializeApp = () => {
  const [fontsLoaded, error] = useFonts({
    "Literata-Black": require("../../assets/fonts/Literata-Black.ttf"),
    "Literata-Bold": require("../../assets/fonts/Literata-Bold.ttf"),
    "Literata-ExtraBold": require("../../assets/fonts/Literata-ExtraBold.ttf"),
    "Literata-Medium": require("../../assets/fonts/Literata-Medium.ttf"),
    "Literata-Regular": require("../../assets/fonts/Literata-Regular.ttf"),
    "Literata-SemiBold": require("../../assets/fonts/Literata-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hide();
    }
  }, [fontsLoaded, error]);
};

export default useInitializeApp;
