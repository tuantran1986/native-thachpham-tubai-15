import { Button, StyleSheet, Text, View } from "react-native";
// 2.7 import - CONTAINER - dependencies
import container from "./src/dependencies/dependencies";
import { PostClient } from "./src/networking/Post/PostClient";
import { useEffect, useState } from "react";
import { Post } from "./src/model/Post";

// BAI 16 - phần 2 = CALL API = DEPENDENCIES: tối ưu bộ nhớ + dễ maintain
export default function AppBai18() {
  const [posts, setPosts] = useState<Post[]>([]);
  // 2.8 lấy INSTANCE từ trong CONTAINER
  const postClient = container.get<PostClient>("PostClient");
  const getListPost = () => {
    // 2.9 sử dụng METHOD trong INSTANCE
    postClient.fetchPostsPromise().then((res) => {
      setPosts(res.data);
    });
  };

  // TH1: USE_EFFECT - dependencies = [] : sẽ CHỈ CHẠY 1 LẦN - sau khi RENDER 1
  // useEffect(() => {
  //   console.log("--- CHAY USEEFFECT 1: dependecies = [] ");
  //   getListPost();
  // },[]);

  // TH2: USE_EFFECT - dependencies = KHÔNG KHAI BÁO : component render lần nào - chạy sau render lần đó
  // useEffect(() => {
  //   console.log("--- CHAY USEEFFECT 1: dependecies = KHÔNG KHAI BÁO ");
  //   getListPost();
  // });

  // TH3: USE_EFFECT - dependencies = [a, b, c] : sẽ CHẠY 1 LẦN - sau khi RENDER 1, và SẼ CHẠY khi có sự thay đổi a, b, c
  const [a, setA] = useState(0);

  useEffect(() => {
    console.log("--- CHAY USEEFFECT 1: dependecies = [a, b, c] ");
    getListPost();
  }, [a]);

  console.log("--- COMPONENT RENDER  ---");
  return (
    <View style={styles.container}>
      <Button
        title="Change Dependencies"
        onPress={() => {
          setA(a + 1);
        }}
      />
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
});
