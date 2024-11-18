import {StatusBar} from "expo-status-bar";
import {StyleSheet} from "react-native";
import {ColorValues} from "./src/constants";
import * as SplashScreen from "expo-splash-screen";
import useInitializeApp from "./src/hooks/useInitializeApp";
import {SafeAreaView} from "react-native-safe-area-context";
import {StackNav} from "./src/navigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useInitializeApp();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <StackNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorValues.background.default,
  },
});
