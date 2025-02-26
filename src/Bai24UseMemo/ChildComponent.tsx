import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type ChildComponentProps = {
  valueProps: number;
};

function ChildComponent(childComponentProps: ChildComponentProps) {
  const { valueProps } = childComponentProps;

  // ---------- component render ----------
  console.log("COMPONENT - 'CON' = ListToDo - RENDER");
  return (
    <View style={styles.container}>
      <View style={styles.spaceBlock}></View>
      <Text>COMPONENT CON: valueProps = {valueProps}</Text>
      <View style={styles.spaceBlock}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  spaceBlock: {
    margin: 10,
  },
});

// export default ChildComponent;
// GIẢI PHÁP - phần 2 = "cache lại COMPONENT CON" = MEMO của REACT: React.Memo()
export default memo(ChildComponent);
