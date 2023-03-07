import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const UpdateProfile = ({ fullname, username, navigation }) => {
  return (
    <View style={tw`justify-start flex-1 p-4 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between mb-4`}>
        <AntDesign name="arrowleft" size={24} color="black" style={tw`mr-2`} onPress={() => navigation.goBack()}/>
        <Text style={tw`text-2xl font-bold`}>Bio-data</Text>
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
        style={tw`border-b h-15`}
      />
      <TextInput placeholder="And your last name" style={tw`border-b h-15`} />
      <TextInput placeholder="Phone number" style={tw`border-b h-15`} />
      <TextInput placeholder="Select your gender" style={tw`border-b h-15`} />
      <TextInput placeholder="Select your location" style={tw`border-b h-15`} />
      <View style={tw`p-2 p-4 mt-6 bg-blue-700 rounded-md`}>
        <Text style={tw`text-2xl text-center text-white`}>Update Profile</Text>
      </View>
    </View>
  );
};

export default UpdateProfile;
