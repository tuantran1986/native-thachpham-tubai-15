import { StyleSheet, View } from "react-native";
import GetPostsExampleRTK from "./GetPostsExampleRTK";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function Bai26ReduxToolkitQuery() {
  // TRUYỀN STORE = PROVIDER
  return (
    <Provider store={store}>
      <GetPostsExampleRTK />
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
