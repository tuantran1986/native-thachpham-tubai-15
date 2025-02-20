import { Button, StyleSheet, Text, View } from "react-native";
// 2.7 import - CONTAINER - dependencies
import container from "./src/dependencies/dependencies";
import { PostClient } from "./src/networking/Post/PostClient";
import { useState } from "react";
import { Post } from "./src/model/Post";

// BAI 16 - phần 2 = CALL API = DEPENDENCIES: tối ưu bộ nhớ + dễ maintain
export default function AppBai17Phan2() {
  const [posts, setPosts] = useState<Post[]>([]);
  // 2.8 lấy INSTANCE từ trong CONTAINER
  const postClient = container.get<PostClient>("PostClient");
  return (
    <View style={styles.container}>
      <Button
        title="call api - 1 DEPENDENCIES - PROMISE"
        onPress={() => {
          // 2.9 sử dụng METHOD trong INSTANCE
          postClient.fetchPostsPromise().then((res) => {
            setPosts(res.data);
          });
        }}
      />
      <View style={styles.btncls}></View>
      <Button
        title="call api - 1 DEPENDENCIES - CALLBACK"
        onPress={() => {
          // 2.9 sử dụng METHOD trong INSTANCE
          postClient.fetchPostsWithCallback((res) => {
            setPosts(res);
          });
        }}
      />
      <View style={styles.btncls}></View>
      <Button
        title="clear list"
        onPress={() => {
          setPosts([]);
        }}
      />
      <View style={styles.btncls}></View>
      <Text>DS POST:</Text>
      <View style={{ height: 300, overflow: "scroll" }}>
        {posts.map((elm, index) => (
          <Text key={elm.id}>
            STT: {index}, TITLE: {elm.title}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },
  btncls: {
    margin: 10,
  },
});
