import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View
      style={tw`items-center flex-1 h-full pt-4 justify-evenly bg-violet-600`}
    >
      <View style={tw`flex-1`}>
        <Text style={tw`text-4xl text-center text-white`}>Hello </Text>
        <Text style={tw`text-4xl text-center text-white`}>I'm Sparco </Text>
      </View>
      <View style={tw`items-center justify-center flex-3`}>
        <View style={tw`absolute p-24 bg-white rounded-full opacity-10`}></View>
        <View style={tw`absolute bg-white rounded-full p-18 opacity-20`}></View>
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
      <View style={tw`flex-1 mb-8`}>
        <View>
          <Text style={tw`text-4xl text-center text-white`}>
            How can I help
          </Text>
          <Text style={tw`text-4xl text-center text-white`}> you ? </Text>
        </View>
        <View style={tw`p-4 bg-white rounded-full`}>
          <Text style={tw`text-3xl text-center text-violet-700`}>
            {" "}
            I want to know{" "}
          </Text>
        </View>
      </View>
      <View
        style={tw`flex flex-row items-center justify-between w-full px-4 bg-white h-15`}
      >
        <MaterialCommunityIcons
          name="view-dashboard-outline"
          size={40}
          style={tw`text-violet-700`}
        />
        <View
          style={tw`h-full px-3 py-2 mb-8 bg-white rounded-full shadow-2xl`}
        >
          <Entypo name="camera" size={40} style={tw`text-violet-700`} />
        </View>
        <Entypo
          name="keyboard"
          size={40}
          style={tw`text-violet-700`}
          onPress={() => navigation.navigate('Chat')}
        />
      </View>
    </View>
  );
};

export default Home;
