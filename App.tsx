import { Button, StyleSheet, View } from "react-native";
// 4. import - CONTAINER - dependencies
import container from "./src/dependencies/dependencies";
import UserService from "./src/services/UserService";
import { fetchPosts } from "./src/networking/ApiClient";

// BAI 16 - CALL API
export default function App() {
  // 5. lấy INSTANCE từ trong CONTAINER
  const userService = container.get<UserService>("UserService");
  return (
    <View style={styles.container}>
      <Button
        title="call api"
        onPress={() => {
          // 6. sử dụng METHOD trong INSTANCE
          fetchPosts();
        }}
      />
      <View style={{ margin: 10 }}></View>
      <Button
        title="user service hello"
        onPress={() => {
          // 6. sử dụng METHOD trong INSTANCE
          userService.hello();
        }}
      />
    </View>
  );
}

// ============= CACH 2 = VIET DEPENDENCIES ENJECTION =============

// export default function App() {
//   // 5. lấy INSTANCE từ trong CONTAINER
//   const userService = container.get<UserService>("UserService");
//   return (
//     <View style={styles.container}>
//       <Button
//         title="service"
//         onPress={() => {
//           // 6. sử dụng METHOD trong INSTANCE
//           userService.hello();
//         }}
//       />
//     </View>
//   );
// }

// ============= CACH 1 = VIET từ khóa NEW =============

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Button
//         title="service"
//         onPress={() => {
//           // NHƯỢC ĐIỂM: sử dụng từ khóa "NEW - Ở NHIỀU NƠI"
//           // bị tràn bộ nhớ + khó quản lý + khó maintain
//           new UserService().hello();
//         }}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btncls: {
    margin: 10,
  },
});
