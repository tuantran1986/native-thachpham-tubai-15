import { Button, StyleSheet, Text, View } from "react-native";
// 2.7 import - CONTAINER - dependencies
import container from "./src/dependencies/dependencies";
import { PostClient } from "./src/networking/Post/PostClient";
import { useEffect, useState } from "react";
import { Post } from "./src/model/Post";

// =============== CUSTOM-HOOK ===============
const useGetPostList = () => {
  const [data, setData] = useState<Post[]>([]);
  useEffect(() => {
    // 2.8 lấy INSTANCE từ trong CONTAINER
    const postClient = container.get<PostClient>("PostClient");
    postClient.fetchPostsPromise().then((res) => {
      setData(res.data);
    });
  }, []);

  return [data]; // CYDB: [] = destructoring - STATE (khong can: setState)
};

export default function AppBai24CustomHook() {
  // =============== CODE - TRUOC CUSTOM HOOK ===============
  // const [posts, setPosts] = useState<Post[]>([]);
  // useEffect(() => {
  //   // 2.8 lấy INSTANCE từ trong CONTAINER
  //   const postClient = container.get<PostClient>("PostClient");
  //   postClient.fetchPostsPromise().then((res) => {
  //     setPosts(res.data);
  //   });
  // }, []);

  // =============== CUSTOM-HOOK ===============
  const [posts] = useGetPostList(); // STATE: posts - KHÔNG CẦN: setPosts

  return (
    <View style={styles.container}>
      <Text>----------- DS POST -----------</Text>
      <View style={{ height: 300, overflow: "scroll" }}>
        {posts &&
          posts.map((elm, index) => (
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
});
