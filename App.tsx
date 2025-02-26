import { StyleSheet, View } from "react-native";
import AppBai24UseMemo from "./src/Bai24UseMemo/AppBai24UseMemo";

export default function App() {
  // ---------- component render ----------
  return (
    <View style={styles.container}>
      <AppBai24UseMemo />
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
