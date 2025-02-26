import { StyleSheet, View } from "react-native";
import AppBai23UseCallbackMemo from "./src/Bai23UseCallbackMemo/AppBai23UseCallbackMemo";
// import AppBai22KhongDungUseCallbackMemo from "./src/Bai22KhongDungUseCallbackMemo/AppBai22KhongDungUseCallbackMemo";

export default function App() {
  // ---------- component render ----------
  return (
    <View style={styles.container}>
      {/* <AppBai22KhongDungUseCallbackMemo /> */}
      <AppBai23UseCallbackMemo />
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
