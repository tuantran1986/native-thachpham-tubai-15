import { StyleSheet, View } from "react-native";
import CounterExample from "./CounterExample";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function AppBai25ReduxToolkit() {
  // TRUYỀN STORE = PROVIDER
  return (
    <Provider store={store}>
      <CounterExample />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },
});
