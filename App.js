import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform
} from "react-native";

import { colors } from "./src/utils/colors";
import { spacing } from "./src/utils/sizes";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.search}>
          <Text>search</Text>
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.green,
    padding: spacing.md,
    fontWeight: "bold"
  },
  list: {
    flex: 1,
    backgroundColor: colors.blue,
    fontWeight: "bold",
    padding: spacing.md
  }
});
