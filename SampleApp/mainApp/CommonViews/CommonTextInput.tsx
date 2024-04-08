import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { s } from "react-native-size-matters";
import { useState } from "react";
import { AppFontStyle } from "../Styles/AppFontStyle";
import { AppColors } from "../Styles/AppColors";

const CommonTextInput = (props: any) => {
  const {
    title,
    isMandatory,
    icon,
    placeHolder,
    onChangeText,
    onSubmitEditing,
    borderBottomColor,
    refValue,
    keyboardType, //enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
    returnKeyType, //enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
    secureTextEntry,
    editable,
    value,
    backgroundColor,
    autoCapitalize,
    maxLength,
    isVisibleTextLimit,
    rightIcon,
    onPressRightIcon,
    contextMenuHidden = false,
    isMultiline = false,
    height = s(40),
    iconSize = s(10),
    containerStyle,
    mainViewStyle,
    pointerEvents = "auto",
  } = props;

  const [inputTextLength, setInputTextLength] = useState(0);
  return (
    <View style={[containerStyle, { gap: 8 }]} pointerEvents={pointerEvents}>
      {title != undefined && (
        <View style={{ flexDirection: "row" }}>
          <Text
            style={[
              AppFontStyle.MEDIUM_INTER_14,
              { color: AppColors.black_171823 },
            ]}
          >
            {title}
          </Text>
          {isMandatory == true && isMandatory != undefined && (
            <Text
              style={[AppFontStyle.REGULAR_INTER_14, { color: AppColors.red }]}
            >
              *
            </Text>
          )}
        </View>
      )}
      <View
        style={[
          styles.mainView,
          {
            height: s(height),
          },
          mainViewStyle,
        ]}
      >
        {icon != undefined && (
          <Image
            source={icon}
            resizeMode="contain"
            style={{ width: s(iconSize), height: "100%", marginRight: 10 }}
          />
        )}
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={AppColors.gray_838587}
          style={[
            styles.textInputStyle,
            AppFontStyle.REGULAR_INTER_14,
            isMultiline ? { height: "80%" } : { height: "100%" },
          ]}
          ref={refValue}
          multiline={isMultiline}
          textAlign={"left"}
          textAlignVertical={isMultiline ? "top" : "center"}
          onSubmitEditing={() => onSubmitEditing()}
          onChangeText={(value) => {
            onChangeText(value);
            setInputTextLength(value.length);
          }}
          contextMenuHidden={contextMenuHidden}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          editable={editable}
          value={value}
          autoCapitalize={
            keyboardType === "email-address" ? "none" : autoCapitalize
          }
          maxLength={maxLength}
        />
        {isVisibleTextLimit != undefined && (
          <Text
            style={[
              AppFontStyle.REGULAR_INTER_14,
              { color: AppColors.black_171823, marginLeft: s(10) },
            ]}
          >
            {inputTextLength}/{maxLength}
          </Text>
        )}
        {rightIcon != undefined && (
          <TouchableOpacity onPress={() => onPressRightIcon()}>
            <Image
              source={rightIcon}
              resizeMode="contain"
              style={{ width: s(iconSize), height: "100%" }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: AppColors.gray_F5F7F9,
  },
  textInputStyle: {
    color: AppColors.black_171823,
    flex: 1,
  },
});

export default CommonTextInput;
