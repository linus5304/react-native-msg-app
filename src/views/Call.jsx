import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Call = ({name, duration}) => {
  return (
    <View style={tw`flex-1 justify-center bg-violet-700 items-center `}>
      <View style={tw`border-4 rounded-full border-white`}>
        <Ionicons name="ios-person-circle-outline" size={100} color="black" />
      </View>
      <View style={tw`items-center`}>
        <Text style={tw`text-3xl font-bold text-white mb-2`}>
          {name}
        </Text>
        <Text style={tw`text-lg font-semibold text-white mb-2`}>CALLING</Text>
        <Text style={tw`text-white mb-40`}>{duration}</Text>
      </View>
      <View style={tw`bg-red-600 rounded-full p-4`}>
        <MaterialIcons name="call-end" size={30} style={tw`text-white`} />
      </View>
    </View>
  );
};

export default Call;
