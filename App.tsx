import { StyleSheet, View } from "react-native";
// import AppBai25ReduxToolkit from "./src/Bai25ReduxToolkit/Component/AppBai25ReduxToolkit";
import Bai26ReduxToolkitQuery from "./src/Bai26ReduxToolkitQuery/Component/Bai26ReduxToolkitQuery";

export default function App() {
  // ---------- component render ----------
  return (
    <View style={styles.container}>
      <Bai26ReduxToolkitQuery />
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
