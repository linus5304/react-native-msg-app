import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import Call from "./src/views/Call";
import Chat from "./src/views/Chat";
import Welcome from "./src/views/Welcome";
import Profile from "./src/views/Profile";
import UpdateProfile from "./src/views/UpdateProfile";
import Home from "./src/views/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1 bg-violet-600">
        <View className="flex-1 ">
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Chat" component={Chat} options={{headerShown: false}} initialParams={{ name: "John Doe"}}/>
            <Stack.Screen name="Call" component={Call} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown: false}}/>
          </Stack.Navigator>
          {/* <Chat /> */}
          {/* <Welcome /> */}
          {/* <Home /> */}
          {/* <Call duration="6:20" name="CUSTOMER SERVICE" /> */}
          {/* <Profile fullname="John Doe" username="@johndoe22" /> */}
          {/* <UpdateProfile fullname="John Doe" username="@johndoe22"/> */}
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}
