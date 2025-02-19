import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import UserService from "./src/services/UserService";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="service"
        onPress={() => {
          // NHƯỢC ĐIỂM: sử dụng từ khóa "NEW - Ở NHIỀU NƠI"
          // bị tràn bộ nhớ + khó quản lý + khó maintain
          new UserService().hello();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
