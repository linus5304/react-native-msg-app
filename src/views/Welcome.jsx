import { View, Text, Button } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";


const Welcome = ({ navigation }) => {

  React.useEffect(()=>{
    var t = 0;
    var timeout = setInterval(()=>{
      updateBG()
      ++t;
      if(t==7){
        t=0;
        clearTimeout(timeout)
        navigation.navigate("Home")
      }
    },900)

    return ()=> clearTimeout(timeout)

  },[bg])

  const [bg,setBg] = React.useState([
    {
      name: "dot1",
      isBg:false
    },
    {
      name: "dot2",
      isBg:false
    },
    {
      name: "dot3",
      isBg:false
    },
    {
      name: "dot4",
      isBg:false
    },
  ])

  const updateBG=()=>{
    let arr = [...bg]
    let isActive = false;
    let activeIndex = -1;

    // check if no one is active
    arr.forEach((item,index)=>{
      if(item.isBg==true){
        isActive = true
      }
    })

     if(isActive==false){
      arr[0].isBg = true
     }else{
        // check for active index
        arr.forEach((item,index)=>{
          if(item.isBg===true){
            activeIndex = index;
          }
        })

        //assign next index active
        if(activeIndex>=0 && activeIndex<arr.length){
          arr[activeIndex].isBg = false
          activeIndex == arr.length-1 ? arr[0].isBg = true : arr[activeIndex+1].isBg = true;
        }else{
          arr[0].isBg = true;
        }
      }
    
      setBg(arr);
  }

  const checkIsBg=(value)=>{
    const arr = [...bg]
    let res = false;

    arr.forEach((item,index)=>{
      if(item.name==value){
          res = item.isBg
        }
    })

    return res;
  }

  return (
    <View style={tw`items-center justify-center h-full bg-[#1865f2]`}>
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
        <View style={tw`p-2 mx-1 ${!checkIsBg('dot1') ? 'bg-white': 'bg-[#09224c] relative bottom-1'} rounded-full `}></View>
        <View style={tw`p-2 mx-1 ${!checkIsBg('dot2') ? 'bg-white': 'bg-[#09224c] relative bottom-1'} rounded-full`}></View>
        <View style={tw`p-2 mx-1 ${!checkIsBg('dot3') ? 'bg-white': 'bg-[#09224c] relative bottom-1'} rounded-full `}></View>
        <View style={tw`p-2 mx-1 ${!checkIsBg('dot4') ? 'bg-white': 'bg-[#09224c] relative top-1'} rounded-full `}></View>
      </View>
    </View>
  );
};

export default Welcome;
