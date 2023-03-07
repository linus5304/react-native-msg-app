import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";

const Profileitem = ({ icon, title, subtitle, auth }) => {
  return (
    <View style={tw`flex flex-row items-center justify-between mb-8`}>
      <View style={tw`flex flex-row`}>
        <View
          style={tw`flex mr-2 justify-center items-center bg-gray-200 rounded-full px-2`}
        >
          {icon}
        </View>
        <View>
          <Text style={tw`text-lg font-semibold`}>{title}</Text>
          {subtitle && <Text style={tw`text-gray-400`}>{subtitle}</Text>}
        </View>
      </View>
      {auth ? (
        <></>
      ) : (
        <View>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
      )}
    </View>
  );
};

export default Profileitem;
