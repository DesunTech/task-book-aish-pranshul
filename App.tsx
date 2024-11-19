import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { Provider } from "react-redux";
import MainStackNavigator from "./src/navigation";
import store from "./src/redux/reduxstore";
import { StatusBar } from "expo-status-bar";
import colors from "./src/utils/colors";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
}
