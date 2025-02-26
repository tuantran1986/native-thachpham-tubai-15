import { useMemo, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ChildComponent from "./ChildComponent";

export default function AppBai24UseMemo() {
  const [count, setCount] = useState(0);

  const expensiveCalculate = () => {
    console.log("---- chay tinh toan ----");
    let bigCalculate = 0;
    for (let i = 0; i < 10000000; i++) {
      bigCalculate += i;
    }
    return bigCalculate; // return 1 value = number
  };

  // TH1: không dùng useMemo -> BỊ CHẠY LẠI HÀM NÀY: expensiveCalculate
  // const valueProps = expensiveCalculate();
  // TH2: dùng useMemo -> KHÔNG CHẠY LẠI HÀM NÀY: expensiveCalculate
  const valueProps = useMemo(() => expensiveCalculate(), []);

  // ---------- component render ----------
  console.log("COMPONENT - 'CHA' = AppBai24UseMemo - RENDER");
  return (
    <>
      <Text>tăng COUNT - RENDER LẠI CHA</Text>
      <Text>check - RENDER LẠI CON</Text>
      <ChildComponent valueProps={valueProps} style={styles.listStyle} />
      <Button
        title="coponent CHA: tăng COUNT - RENDER LẠI CHA"
        onPress={() => {
          setCount(count + 1);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 100,
  },
  listStyle: {
    margin: 10,
  },
});
