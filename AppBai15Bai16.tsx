import { Button, StyleSheet, View } from "react-native";
// 2.7 import - CONTAINER - dependencies
import container from "./src/dependencies/dependencies";
import UserService from "./src/services/UserService";
// import { fetchPostsWithCallback } from "./src/networking/ApiClient";
import { PostClient } from "./src/networking/Post/PostClient";
// BAI 16 - phần 2 = CALL API = DEPENDENCIES: tối ưu bộ nhớ + dễ maintain
export default function AppBai15Bai16() {
  // 2.8 lấy INSTANCE từ trong CONTAINER
  const userService = container.get<UserService>("UserService");
  const postClient = container.get<PostClient>("PostClient");
  return (
    <View style={styles.container}>
      <Button
        title="call api - 1 DEPENDENCIES"
        onPress={() => {
          // 2.9 sử dụng METHOD trong INSTANCE
          // postClient.fetchPostsWithCallback();
          postClient.fetchPostsWithCallback(() => {});
        }}
      />
      <View style={{ margin: 10 }}></View>
      <Button
        title="user service hello"
        onPress={() => {
          // sử dụng METHOD trong INSTANCE
          userService.hello();
        }}
      />
    </View>
  );
}

// // BAI 16 - phần 1 = CALL API = INSTANCE: tốn bộ nhớ + khó maintain
// export default function App() {
//   // 5. lấy INSTANCE từ trong CONTAINER
//   const userService = container.get<UserService>("UserService");
//   return (
//     <View style={styles.container}>
//       <Button
//         title="call api - 2 INSTANCE"
//         onPress={() => {
//           // 6. sử dụng METHOD trong INSTANCE
//           fetchPostsWithCallback();
//         }}
//       />
//       <View style={{ margin: 10 }}></View>
//       <Button
//         title="user service hello"
//         onPress={() => {
//           // 6. sử dụng METHOD trong INSTANCE
//           userService.hello();
//         }}
//       />
//     </View>
//   );
// }

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
