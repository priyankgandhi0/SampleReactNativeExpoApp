import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppScreens } from "../Styles/AppScreens";
import SplashScreen from "../Screens/SplashScreen/SplashScreen";
import LoginScreen from "../Screens/AuthenticationScreens/LoginScreen";
import HomeScreen from "../Screens/HomeScreen";
const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={AppScreens.HomeScreen}
      >
        <Stack.Screen
          name={AppScreens.SplashScreen}
          options={{ animation: "fade" }}
          component={SplashScreen}
        />

        <Stack.Screen
          name={AppScreens.LoginScreen}
          options={{ animation: "fade" }}
          component={LoginScreen}
        />
        <Stack.Screen
          name={AppScreens.HomeScreen}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
