import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 


const Welcome = () => {
  return (
    <View style={tw`bg-violet-600 h-full justify-center items-center`}>
      <View style={tw`justify-center items-center `}>
        <View style={tw`bg-white p-40 rounded-full opacity-10 absolute`}></View>
        <View style={tw`bg-white p-30 rounded-full opacity-20 absolute`}></View>
        <FontAwesome5 name="robot" size={40} color="black" style={tw`mb-20 z-20 text-violet-700`}/>
        <FontAwesome
          name="commenting-o"
          size={100}
          color="white"
          style={tw`z-10 absolute`}
        />
      </View>
      <View style={tw`flex flex-row mt-40`}>
        <View style={tw`bg-white p-4 rounded-full mx-1 `}></View>
        <View style={tw`bg-white p-4 rounded-full mx-1`}></View>
        <View style={tw`bg-white p-4 rounded-full mx-1 `}></View>
        <View style={tw`bg-white p-4 rounded-full mx-1 `}></View>
      </View>
    </View>
  );
};

export default Welcome;
