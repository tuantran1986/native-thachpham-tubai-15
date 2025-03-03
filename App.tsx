import { StyleSheet, View } from "react-native";
import AppBai24CustomHook from "./AppBai24CustomHook";

export default function App() {
  // ---------- component render ----------
  return (
    <View style={styles.container}>
      <AppBai24CustomHook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
});
