import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function AppBai17() {
  // BÀI 17: USESTATE - của REACT
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <View style={{ margin: 10 }}></View>
      <Button
        title="Tăng 1"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <View style={{ margin: 10 }}></View>
      <Button
        title="Giảm 1"
        onPress={() => {
          setCount(count - 1);
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
  btncls: {
    margin: 10,
  },
});
