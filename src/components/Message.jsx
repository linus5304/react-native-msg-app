import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Message = ({ text, time, isReceiver }) => {
  return (
    <View style={tw`flex flex-row ${isReceiver ? "flex-row-reverse" : ""}`}>
      <View style={tw`flex px-4 mt-8 w-[80%]`}>
        <View
          style={tw`p-8 rounded-full bg-violet-500 w-6 absolute z-10 ${
            isReceiver ? "ml-64" : ""
          } mt-[-30px]`}
        ></View>
        <View style={tw`min-h-15 bg-gray-400 rounded-lg p-2`}>
          <Text>{text}</Text>
        </View>
          <Text style={tw`${isReceiver ? 'text-right mr-2' : ''} ml-2 text-[12px]`}>{time}</Text>
      </View>
    </View>
  );
};

export default Message;
