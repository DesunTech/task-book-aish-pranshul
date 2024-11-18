import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BookList} from "../features/BookList";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookDetails" component={BookList} />
    </Stack.Navigator>
  );
};
