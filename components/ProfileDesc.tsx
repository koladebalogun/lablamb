import React,{useState} from 'react'
import { View, Text } from 'react-native'

import { ProfileDetails } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'


const ProfileDesc = ({data}) => {
  console.log(data.login.username)
  return (
    <>
      <View style={{width: '100%'}}>
        <ProfileDetails 
          username={data.login.username}
          age={data.dob.age}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
      </View>

      <Text style={{ 
        marginTop: SIZES.extraLarge * 1.5 , 
        fontFamily: FONTS.bold, 
        fontSize: SIZES.large,
        color: COLORS.white
        }}>
        Profile Details
      </Text>

      <View style={{margin: SIZES.extraLarge}}>
        <Text style={{fontSize: SIZES.large, fontFamily: FONTS.medium, margin: SIZES.font, color: COLORS.white}}>Name: {data.name.title} {data.name.first} {data.name.last}</Text>
        <Text style={{fontSize: SIZES.large, fontFamily: FONTS.medium, margin: SIZES.font, color: COLORS.white}}>Gender: {data.gender}</Text>
        <Text style={{fontSize: SIZES.large, fontFamily: FONTS.medium, margin: SIZES.font, color: COLORS.white}}>Location: {data.location.city} {data.location.state} {data.location.postcode}</Text>
        <Text style={{fontSize: SIZES.large, fontFamily: FONTS.medium, margin: SIZES.font, color: COLORS.white}}>Email: {data.email}</Text>
        <Text style={{fontSize: SIZES.large, fontFamily: FONTS.medium, margin: SIZES.font, color: COLORS.white}}>Phone no: {data.cell}</Text>
      </View>
    </>
  )
}

export default ProfileDesc