import React, { useState } from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";

import { useGetPostsQuery } from "../redux/slices/ApiSlice";

// ------------- COMPONENT PHU -------------
const Postitem = (post: any) => {
  return (
    <View
      style={{
        backgroundColor: "green",
        borderCurve: 5,
        margin: 10,
        padding: 10,
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {post.post.title}
      </Text>
      <View style={{ height: 10 }} />
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {post.post.title}
      </Text>
    </View>
  );
};

// ------------- COMPONENT CHINH -------------
export default function GetPostsExampleRTK() {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useGetPostsQuery();

  let content;

  const onRefresh = () => {
    refetch().then(() => setRefreshing(false));
  };

  if (isLoading) {
    content = (
      <View style={{ alignContent: "center" }}>
        <Text>Content is loading ...</Text>
      </View>
    );
  } else if (isError) {
    content = (
      <View style={{ alignContent: "center" }}>
        <Text>fetch data error ...</Text>
      </View>
    );
  } else if (isSuccess) {
    content = (
      <ScrollView>
        {posts.map((p) => (
          <Postitem key={p.id} post={p} />
        ))}
      </ScrollView>
    );
  }

  // ------------------ RENDER ------------------
  return (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
      {content}
    </RefreshControl>
  );
  // return content;
}
