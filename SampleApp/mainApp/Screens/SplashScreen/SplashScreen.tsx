import { StyleSheet, Text, View } from "react-native";
import { AppFontStyle } from "../../Styles/AppFontStyle";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppScreens } from "../../Styles/AppScreens";

export default function SplashScreen() {
  // UseEffects....
  useEffect(() => {
    setTimeout(() => {
      handleGetToken();
    }, 2000);
  });

  //Check login token
  const handleGetToken = async () => {
    // const token = await AsyncStorage.getItem("token");
    // if (token) {
    //   getUserDetailsAPI();
    // } else {
    //   navigation.navigate(AppScreens.LoginScreen);
    // }
    navigation.navigate(AppScreens.LoginScreen);
  };

  // Declare variables here
  const navigation = useNavigation();

  return (
    <View style={styles.containerStyle}>
      <Text style={[styles.logoTextStyle, AppFontStyle.MEDIUM_INTER_32]}>
        Sample App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
  },
  logoTextStyle: { textAlign: "center" },
});
