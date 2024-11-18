import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BookList, BookSearch} from "../features/BookList";
import {BookDetails} from "../features";

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: "none"}}>
      <Stack.Screen name="BookList" component={BookList} />
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="SearchScreen" component={BookSearch} />
    </Stack.Navigator>
  );
};
