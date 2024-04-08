import { Image, Text, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors } from "../Styles/AppColors";
import { AppFontStyle } from "../Styles/AppFontStyle";

export default function ButtonView(props: any) {
  const {
    containerStyle,
    textStyle,
    imageStyle,
    title = "Button",
    imageName,
    imageSize = s(20),
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={[
        {
          height: s(50),
          borderWidth: s(1),
          borderColor: AppColors.blue_263AF7,
          backgroundColor: AppColors.white,
          borderRadius: s(15),
          alignItems: "center",
          justifyContent: "center",
        },
        containerStyle,
      ]}
      onPress={onPress}
    >
      <View
        style={[{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: s(10),
        },
      ]}
      >
        {imageName != null && (
          <Image
            source={imageName}
            style={[{
              width: imageSize,
              height: imageSize,
              resizeMode: "contain",
            },imageStyle]}
          />
        )}
        {title != "" && (
          <Text
            style={[
              AppFontStyle.MEDIUM_INTER_18,
              { color: AppColors.blue_263AF7 },
              textStyle,
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
