import { Link } from "expo-router";
import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/checkout" asChild>
        <CustomButton title="Checkout" />
      </Link>
    </View>
  );
}
