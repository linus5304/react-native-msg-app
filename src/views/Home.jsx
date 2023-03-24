import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View
      style={tw`items-center flex-1 h-full pt-4 justify-evenly bg-[#1865f2]`}
    >
      <View style={tw`flex-1 mt-8`}>
        <Text style={tw`text-3xl text-center text-[#d8bafe] mt-4 mb-2 font-normal`}>Hello </Text>
        <Text style={tw`text-3xl text-center tracking-wider text-[#ebdbff] font-normal`}>I'm Sparco </Text>
      </View>
      <View style={tw`items-center justify-center flex-3`}>
        <View style={tw`absolute p-24 bg-white rounded-full opacity-10`}></View>
        <View style={tw`absolute bg-[#aa05f4] rounded-full p-18 opacity-20`}></View>
        <FontAwesome5
          name="robot"
          size={32}
          color="black"
          style={tw`z-20 mb-20 text-violet-700`}
        />
        <FontAwesome
          name="commenting-o"
          size={80}
          color="white"
          style={tw`absolute z-10`}
        />
      </View>
      <View style={tw`flex-1 mb-20`}>
        <View>
          <Text style={tw`text-3xl text-center text-white font-normal`}>
            How can I help
          </Text>
          <Text style={tw`text-3xl text-center text-white`}> you ? </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={tw`p-3 bg-white shadow-[#051ff4] rounded-full my-4`}>
          <Text style={tw`text-2xl text-center text-[#051ff4] font-normal`}>
            {" "}
            I want to know{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={tw`flex flex-row items-center justify-between w-full px-4 bg-white h-15`}
      >
        <MaterialCommunityIcons
          name="view-dashboard-outline"
          size={32}
          style={tw`text-[#051ff4]`}
        />
        <View
          style={tw`h-full px-3 py-2 mb-10 bg-white rounded-full shadow-2xl`}
        >
          <Entypo name="camera" size={32} style={tw`text-[#051ff4] pt-1`} />
        </View>
        <Entypo
          name="keyboard"
          size={32}
          style={tw`text-[#051ff4]`}
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
    </View>
  );
};

export default Home;
