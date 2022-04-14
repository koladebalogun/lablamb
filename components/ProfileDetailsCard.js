import { View, Image, Text } from "react-native"
import React, { useEffect } from "react"

import { useNavigation } from "@react-navigation/native"
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";

import { SubInfo, ProfileDetails } from "./SubInfo";


const ProfileDetailsCard = ({ data }) => {
  const navigation = useNavigation()

  useEffect(()=> {
    console.log(data.picture.medium)
  })

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        margin: SIZES.extraLarge,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image 
        source={{ uri: data.picture.large}}
        resizeMode = "cover"
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: SIZES.font,
          borderTopRightRadius: SIZES.font
        }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
      </View>

      <SubInfo data={data}/>

      <View style={{ width: "100%", padding: SIZES.font }}>
        <ProfileDetails 
          username={data.login.username}
          age={data.dob.age}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />

        <View style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress = {() => navigation.navigate("Details", {data})}
          />
        </View>
      </View>
    </View>
  )
}

export default ProfileDetailsCard
