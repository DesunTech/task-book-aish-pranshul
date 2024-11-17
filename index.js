import {registerRootComponent} from "expo";
import {SafeAreaProvider} from "react-native-safe-area-context";

import App from "./App";

// Wrapping App with SafeAreaProvider
function Root() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

registerRootComponent(Root);
