import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AppColors } from "../../Styles/AppColors";
import { s } from "react-native-size-matters";
import { AppFontStyle } from "../../Styles/AppFontStyle";
import CommonTextInput from "../../CommonViews/CommonTextInput";
import { useRef, useState } from "react";
import { AppImages } from "../../Styles/AppImages";
import ButtonView from "../../CommonViews/ButtonView";
import { useNavigation } from "@react-navigation/native";
import { AppScreens } from "../../Styles/AppScreens";

export default function LoginScreen() {
  const [txtEmail, setEmail] = useState("");
  const [txtPassword, setPassword] = useState("");
  const [isVisiblePassword, setVisiblePassword] = useState(true);

  const passwordRef = useRef();
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <SafeAreaView edges={["top"]} style={style.safeAreaStyle} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.container}
      >
        <ScrollView
          style={{
            paddingTop: s(20),
          }}
        >
          <View style={style.cardViewStyle}>
            <Text
              style={[AppFontStyle.SEMIBOLD_INTER_24, { textAlign: "center" }]}
            >
              Login
            </Text>
            <View style={{ gap: s(10) }}>
              <CommonTextInput
                title={"Email"}
                isMandatory={true}
                value={txtEmail}
                placeHolder={"ex. muraddc0@gmail.com"}
                onChangeText={(text) => {
                  setEmail(text);
                }}
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
              />

              <CommonTextInput
                title={"Password"}
                isMandatory={true}
                refValue={passwordRef}
                value={txtPassword}
                secureTextEntry={isVisiblePassword}
                placeHolder={"ex. Muraddc@92887"}
                onChangeText={(text) => {
                  setPassword(text);
                }}
                rightIcon={AppImages.icnPasswordEye}
                onPressRightIcon={() => {
                  setVisiblePassword(!isVisiblePassword);
                }}
                returnKeyType="done"
                onSubmitEditing={() => {
                  // loginAPI();
                }}
              />
            </View>
            <View style={{ gap: s(10) }}>
              <ButtonView
                title={"Login"}
                containerStyle={{
                  borderRadius: s(10),
                  backgroundColor: AppColors.blue_263AF7,
                  height: s(45),
                }}
                textStyle={[
                  AppFontStyle.SEMIBOLD_INTER_16,
                  { color: AppColors.white },
                ]}
                onPress={() => {
                  navigation.navigate(AppScreens.HomeScreen)
                }}
              />

              <ButtonView
                title={"Registration"}
                containerStyle={{
                  borderRadius: s(0),
                  borderColor: AppColors.transparent,
                  height: s(20),
                }}
                textStyle={[
                  AppFontStyle.MEDIUM_INTER_14,
                  { color: AppColors.blue_263AF7 },
                ]}
                onPress={() => {}}
              />

              <ButtonView
                title={"Forgot Password?"}
                containerStyle={{
                  borderRadius: s(0),
                  borderColor: AppColors.transparent,
                  height: s(20),
                }}
                textStyle={[
                  AppFontStyle.MEDIUM_INTER_14,
                  { color: AppColors.blue_263AF7 },
                ]}
                onPress={() => {}}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background_color_EEF2F9,
  },
  safeAreaStyle: {
    backgroundColor: AppColors.background_color_EEF2F9,
  },
  cardViewStyle: {
    backgroundColor: AppColors.white,
    margin: s(20),
    borderRadius: s(20),
    shadowColor: AppColors.black,
    shadowOffset: { height: 0, width: 1 },
    shadowOpacity: 0.1,
    shadowRadius: s(10),
    padding: s(20),
    paddingVertical: s(15),
    gap: s(20),
  },
});
