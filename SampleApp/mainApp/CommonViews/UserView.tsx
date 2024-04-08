import { Image, StyleSheet, Text, View } from "react-native";
import { s } from "react-native-size-matters";
import { AppColors } from "../Styles/AppColors";
import { AppFontStyle } from "../Styles/AppFontStyle";

export default function UserView(props: any) {
  const { item } = props;
  return (
    <View style={style.cardViewStyle}>
      <View style={{ flexDirection: "row", gap: s(10) }}>
        <View
          style={{
            width: s(50),
            height: s(50),
            backgroundColor: AppColors.gray_F5F7F9,
            borderRadius: s(10),
            overflow: "hidden",
          }}
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={{ flex: 1 }}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1, gap:s(5)}}>
          <Text
            style={[
              AppFontStyle.BOLD_INTER_18,
              { color: AppColors.black_171823 },
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              AppFontStyle.SEMIBOLD_INTER_16,
              { flex: 1, color: AppColors.black_171823 },
            ]}
          >
            Price: {item.price}
          </Text>
          <Text
            style={[
              AppFontStyle.REGULAR_INTER_14,
              { flex: 1, color: AppColors.black_171823 },
            ]}
          >
            {item.description}
          </Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1 },
  cardViewStyle: {
    backgroundColor: AppColors.white,
    //   margin: s(20),
    borderRadius: s(20),
    shadowColor: AppColors.black,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: s(5),
    paddingHorizontal: s(15),
    paddingVertical: s(15),
  },
});
