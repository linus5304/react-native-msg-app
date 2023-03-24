import React, { useEffect,useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Message from "../components/Message";
import { FontAwesome } from "@expo/vector-icons";
import { botData } from "../model";
import { StatusBar } from "expo-status-bar";
import { words } from "../../constants";

const demoMessages = [
  {
    id: Math.round(Math.random() * 1000),
    text: "Good morning John, \n How can I help you ?",
    time: new Date().toLocaleTimeString("en-GB", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    }),
    isSender: false,
  },
];

function Chat({ name, navigation }) {
  const [text, onChangeText] = React.useState("");
  const [data, setData] = React.useState([...botData]);
  const [message, setMessage] = React.useState("");
  const [botChats, setBotChat] = React.useState("");

  function getMessage() {
    botData.forEach(item => {
      if (item.key.toLowerCase().search(text.toLowerCase())) {
        setMessage(item.text);
      } else {
        const defaultMsg = botData.find(item => item.key === "default");
        setMessage(defaultMsg.text);
      }
    });
  }

  // useEffect(() => {
  //   getMessage();
  //   console.log(message)
  // }, [text]);

  const handleSetData = (text, isSender) => {
    const newData = {
      id: Math.round(Math.random * 10000),
      text,
      time: new Date().toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }),
      isSender,
    };
    setData([...data, newData]);
    console.log(message);
    onChangeText("");
    getMessage();
  };

  useEffect(() => {}, [text]);

  const keyboardVerticalOffset = Platform.OS === "ios" ? 50 : 0;

  const [quickQuestions,setQuickQuestions] = useState([
    "Where is Sparc located ?","What's the cost at Sparc","At what time does basketball start ?","When is Sparc open ?"
  ])

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
        <View style={tw`flex-1`}>
          <View style={tw` bg-[#051ff4] h-20 mb-2 rounded-b-[8]`}>
            <View style={tw`flex-row items-center justify-center flex-1 p-4 `}>
              <View style={tw`flex-row flex-1`}>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="white"
                  style={tw`mr-2`}
                  onPress={() => navigation.goBack()}
                />
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="white"
                />
                <Text>{name}</Text>
              </View>
              <Entypo
                name="phone"
                size={24}
                color="white"
                onPress={() => navigation.navigate("Call")}
              />
            </View>
          </View>
          <ScrollView scrollsToTop>
            <>
              {data.length > 0 &&
                data.map((item, idx) => {
                  console.log("item msg: ", item.text);
                  console.log("msg :", message);
                  if (item.key) {
                    console.log("Me is out")
                    return (
                      <Message
                        time={item.time}
                        text={item.text}
                        isSender={item.isSender}
                        key={`bot-${idx}`}
                      />
                    );
                  } else {
                    return (
                      <Message
                        time={item.time}
                        text={item.text}
                        isSender={item.isSender}
                        key={`me-${idx}`}
                      />
                    );
                  }
                })}
            </>
          </ScrollView>

          <ScrollView horizontal={true} style={tw`my-2`}>
            {
              quickQuestions && quickQuestions.map((item,index)=>{
                return(
                <View key={index} style={tw`w-[180px] h-[45px] flex justify-center ml-2 mb-5 items-center rounded-full bg-[#060f57]`}>
                  <Text style={tw`text-white font-bold`}>{item}</Text>
                </View>
                )
              })
            }
          </ScrollView>

          <View
            style={tw`flex flex-row min-h-15 bg-gray-100 shadow-2xl  rounded-t-[8] items-center py-2 px-4`}
          >
            <FontAwesome name="plus" size={24} style={tw`mr-1 text-gray-300`} />
            <TextInput
              style={tw`h-12 px-2 pb-2 mr-2 text-lg bg-white w-80`}
              onChangeText={onChangeText}
              value={text}
              placeholder="Type a message"
            />
            <View
              style={tw`p-2 rounded-full bg-[#051ff4] `}
              onStartShouldSetResponder={() => handleSetData(text, true)}
            >
              <FontAwesome
                name="send"
                size={24}
                color="white"
                style={tw`pr-1 text-center`}
              />
            </View>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
        <StatusBar backgroundColor="transparent"/>
      </KeyboardAvoidingView>
    </>
  );
}

export default Chat;
