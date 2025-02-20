import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

// ------------------ component ------------------
const AvatarComponent = ({ username }: { username: string }) => {
  return (
    <View>
      <Text style={{ padding: 100 }}>
        AvatarComponent: username = {username}
      </Text>
    </View>
  );
};

// ------------------ component ------------------
const HeaderComponent = ({ username }: { username: string }) => {
  return <AvatarComponent username={username} />;
};

// ------------------ component ------------------
const ProfileComponent = ({ username }: { username: string }) => {
  return <HeaderComponent username={username} />;
};

// ====== App = BAI 19-1 = TRUYỀN QUA - PROPS ======
export default function AppBai19KoDungUseContext() {
  const [username, setUsername] = useState("tuantran86");

  return (
    <View>
      <ProfileComponent username={username} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
  },
});
