import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Message = ({ text, time, isSender }) => {
  return (
    <View style={tw`flex flex-row ${isSender ? "flex-row-reverse" : ""}`}>
      <View style={tw`flex px-4 w-[80%]`}>
        {!isSender ? (
          <FontAwesome5
            name="robot"
            size={20}
            color="black"
            style={tw`z-20 text-violet-700`}
          />
        ) : (
          <View style={tw`ml-64 rounded-full bg-violet-700`}>
            <Text style={tw`p-1 text-2xl font-bold text-center text-white`}>
              J
            </Text>
          </View>
        )}
        <View
          style={tw`p-4 ${
            isSender ? "bg-gray-400" : "bg-gray-300"
          } rounded-lg min-h-15`}
        >
          <Text>{text}</Text>
        </View>
        <Text style={tw`${isSender ? "text-right mr-2" : ""} ml-2 text-[12px]`}>
          {time}
        </Text>
      </View>
    </View>
  );
};

export default Message;
