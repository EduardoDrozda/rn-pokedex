import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokeList } from "@screens/PokeList";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Screen name="pokelist" component={PokeList} />
    </Navigator>
  );
}
