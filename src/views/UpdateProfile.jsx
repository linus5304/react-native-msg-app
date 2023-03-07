import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const UpdateProfile = ({ fullname, username }) => {
  return (
    <View style={tw`flex-1 justify-start p-4 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between mb-4`}>
        <AntDesign name="arrowleft" size={24} color="black" style={tw`mr-2`} />
        <Text style={tw`font-bold text-2xl`}>Bio-data</Text>
        <View style={tw`w-10`}></View>
      </View>
      <View style={tw`flex items-center`}>
        <Ionicons name="person-circle-outline" size={100} color="black" />
        <View>
          <View>
            <Text style={tw`text-lg font-semibold`}>{fullname}</Text>
            <Text style={tw`text-gray-400`}>{username}</Text>
          </View>
        </View>
      </View>
      <TextInput
        placeholder="What's your first name"
        style={tw`h-15 border-b`}
      />
      <TextInput placeholder="And your last name" style={tw`h-15 border-b`} />
      <TextInput placeholder="Phone number" style={tw`h-15 border-b`} />
      <TextInput placeholder="Select your gender" style={tw`h-15 border-b`} />
      <TextInput placeholder="Select your location" style={tw`h-15 border-b`} />
      <View style={tw`p-2 bg-blue-700 p-4 rounded-md mt-6`}>
        <Text style={tw`text-center text-2xl text-white`}>Update Profile</Text>
      </View>
    </View>
  );
};

export default UpdateProfile;
