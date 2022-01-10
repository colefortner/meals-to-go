import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.search}>
        <Text>search</Text>
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.green,
    height: "5%",
    padding: spacing.sm,
    fontWeight: "bold"
  },
  list: {
    backgroundColor: colors.blue,
    height: "95%",
    fontWeight: "bold",
    padding: spacing.sm
  }
});
