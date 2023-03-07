import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Profileitem from "../components/Profileitem";

const Profile = ({ fullname, username, navigation }) => {
  return (
    <ScrollView style={tw`flex-1 p-4 shadow-lg`}>
      <View style={tw`flex flex-row items-center justify-between mb-4`}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={tw`mr-2`}
          onPress={() => navigation.goBack()}
        />
        <Text style={tw`text-2xl font-bold`}>Profile</Text>
        <View style={tw`w-10`}></View>
      </View>
      <View
        style={tw`flex flex-row items-center justify-between p-4 mb-8 bg-blue-700 rounded-2xl`}
      >
        <View style={tw`flex flex-row items-center`}>
          <View style={tw`mr-2`}>
            <Ionicons name="person-circle-outline" size={50} color="white" />
          </View>
          <View style={tw`mr-4`}>
            <Text style={tw`text-lg font-semibold text-white leading-2`}>
              {fullname}
            </Text>
            <Text style={tw`text-white`}>{username}</Text>
          </View>
        </View>
        <View>
          <Feather
            name="edit-2"
            size={24}
            color="white"
            onPress={() =>
              navigation.navigate("UpdateProfile")
            }
          />
        </View>
      </View>
      <View style={tw`p-2 bg-gray-100 rounded-2xl`}>
        <Profileitem
          icon={
            <Ionicons name="person-circle-outline" size={30} color="black" />
          }
          title="My Account"
          subtitle="Make changes to your account"
        />
        <Profileitem
          icon={
            <Ionicons name="person-circle-outline" size={30} color="black" />
          }
          title="Subscription"
          subtitle="Manage your subscriptions"
        />
        <Profileitem
          icon={
            <Ionicons name="person-circle-outline" size={30} color="black" />
          }
          title="Face ID / Touch Id"
          subtitle="Manage your device security"
          auth
        />
        <Profileitem
          icon={
            <Ionicons name="person-circle-outline" size={30} color="black" />
          }
          title="Two factor authentication"
          subtitle="Further secure your account for safety"
        />
        <Profileitem
          icon={
            <Ionicons name="person-circle-outline" size={30} color="black" />
          }
          title="Logout"
          subtitle="Logout from your account"
        />
      </View>
      <View style={tw`my-4`}>
        <Text>More</Text>
      </View>
      <View style={tw`p-2 bg-gray-100 rounded-2xl`}>
        <Profileitem
          icon={
            <Ionicons name="person-circle-outline" size={30} color="black" />
          }
          title="Help & Support"
        />
        <Profileitem
          icon={
            <Ionicons name="person-circle-outline" size={30} color="black" />
          }
          title="About app"
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
