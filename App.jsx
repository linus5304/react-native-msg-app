import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import Call from "./src/views/Call";
import Chat from "./src/views/Chat";
import Home from "./src/views/Home";
import Profile from "./src/views/Profile";
import UpdateProfile from "./src/views/UpdateProfile";

export default function App() {
  return (
    <SafeAreaView className="flex-1 ">
      <View className="flex-1 ">
        {/* <Chat /> */}
        {/* <Home /> */}
        {/* <Call duration="6:20" name="CUSTOMER SERVICE" /> */}
        {/* <Profile fullname="John Doe" username="@johndoe22" /> */}
        <UpdateProfile fullname="John Doe" username="@johndoe22"/>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
