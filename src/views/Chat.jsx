import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Message from "../components/Message";
import { FontAwesome } from "@expo/vector-icons";

function Chat({ name, navigation }) {
  const [text, onChangeText] = React.useState("");
  return (
    <>
      <View style={tw`flex-1`}>
        <View style={tw`flex-1 bg-violet-700 h-20 rounded-b-[8]`}>
          <View
            style={tw`flex-row items-center justify-center flex-1 p-4 `}
          >
            <View style={tw`flex-row flex-1`}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                style={tw`mr-2`}
                onPress={() => navigation.goBack()}
              />
              <Ionicons name="person-circle-outline" size={30} color="white" />
              <Text>{name}</Text>
            </View>
            <Entypo name="phone" size={24} color="white" onPress={() => navigation.navigate("Call")}/>
          </View>
        </View>
        <ScrollView style={tw`flex-5`}>
          <Message time="12:30"/>
          <Message isReceiver={true} text="Happy" time="13:12"/>
          <Message time="12:30"/>
          <Message isReceiver={true} text="Happy" time="13:12"/>
          <Message time="12:30"/>
          <Message isReceiver={true} text="Happy" time="13:12"/>
          <Message time="12:30"/>
          <Message isReceiver={true} text="Happy" time="13:12"/>
          <Message time="12:30"/>
          <Message isReceiver={true} text="Happy" time="13:12"/>
          <Message time="12:30"/>
          <Message isReceiver={true} text="Happy" time="13:12"/>
          <Message time="12:30"/>
          <Message isReceiver={true} text="Happy" time="13:12"/>
        </ScrollView>
        <View
          style={tw`flex flex-row h-15 bg-gray-100 shadow-2xl  rounded-t-[8] items-center py-2 px-4`}
        >
          <FontAwesome name="plus" size={24} style={tw`mr-1 text-gray-300`} />
          <TextInput
            style={tw`h-10 p-2 mr-2 text-lg bg-white w-80`}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type a message"
          />
          <View style={tw`p-2 rounded-full bg-violet-700 `}>
            <FontAwesome name="send" size={24} color="white" />
          </View>
        </View>
      </View>
    </>
  );
}

export default Chat;
