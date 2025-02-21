import { StyleSheet, View } from "react-native";
import AppBai22KhongDungUseCallbackMemo from "./src/Bai22KhongDungUseCallbackMemo/AppBai22UseCallbackMemo";

export default function App() {
  // ---------- component render ----------
  return (
    <View style={styles.container}>
      <AppBai22KhongDungUseCallbackMemo />
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
