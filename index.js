import "./gesture-handler.native";
import {registerRootComponent} from "expo";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux";
import App from "./App";

// Wrapping App with SafeAreaProvider
function Root() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

registerRootComponent(Root);
