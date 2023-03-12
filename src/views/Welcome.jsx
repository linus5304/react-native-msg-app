import { View, Text, Button } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  React.useEffect(() => {
    var timeout = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <View style={tw`items-center justify-center h-full bg-violet-600`}>
      <View style={tw`items-center justify-center `}>
        <View style={tw`absolute p-40 bg-white rounded-full opacity-10`}></View>
        <View style={tw`absolute bg-white rounded-full p-30 opacity-20`}></View>
        <FontAwesome5
          name="robot"
          size={40}
          color="black"
          style={tw`z-20 mb-20 text-violet-700`}
        />
        <FontAwesome
          name="commenting-o"
          size={100}
          color="white"
          style={tw`absolute z-10`}
        />
      </View>
      <View style={tw`flex flex-row mt-40`}>
        <View style={tw`p-4 mx-1 bg-white rounded-full `}></View>
        <View style={tw`p-4 mx-1 bg-white rounded-full`}></View>
        <View style={tw`p-4 mx-1 bg-white rounded-full `}></View>
        <View style={tw`p-4 mx-1 bg-white rounded-full `}></View>
      </View>
    </View>
  );
};

export default Welcome;
