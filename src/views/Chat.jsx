import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Message from "../components/Message";
import { FontAwesome } from "@expo/vector-icons";

function Chat({ name }) {
  const [text, onChangeText] = React.useState("");
  return (
    <>
      <View style={tw`flex-1`}>
        <View style={tw`flex-1 bg-violet-700 h-30 rounded-b-[8]`}>
          <View
            style={tw`flex-row flex-1 p-4 justify-center items-center mt-10 `}
          >
            <View style={tw`flex-row flex-1`}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="white"
                style={tw`mr-2`}
              />
              <Ionicons name="person-circle-outline" size={30} color="white" />
              <Text>{name}</Text>
            </View>
            <Entypo name="phone" size={24} color="white" />
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
          <FontAwesome name="plus" size={24} style={tw`text-gray-300 mr-1`} />
          <TextInput
            style={tw`bg-white h-10 text-lg p-2 w-80 mr-2`}
            onChangeText={onChangeText}
            value={text}
            placeholder="Type a message"
          />
          <View style={tw`bg-violet-700 rounded-full p-2 `}>
            <FontAwesome name="send" size={24} color="white" />
          </View>
        </View>
      </View>
    </>
  );
}

export default Chat;
