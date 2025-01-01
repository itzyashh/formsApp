import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { colors } from "../constants";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <StatusBar style="auto" />
      <Link href="/checkout" asChild>
        <CustomButton title="Checkout" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
})
