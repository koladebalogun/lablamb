import { useState } from 'react'
import { View, Text, Image, TextInput } from 'react-native'

import { COLORS, SIZES, assets, FONT, FONTS } from '../constants'

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>

      </View>

      <View style={{ marginVertical: SIZES.font}}>
        <Text style={{ fontSize: SIZES.small, color: COLORS.white, fontFamily: FONTS.small}}>
          Hello, 👋
        </Text>
        <Text style={{ fontSize: SIZES.large, color: COLORS.white, marginTop: SIZES.base / 2, fontFamily: FONTS.bold}}>
          Welcome to your Profile
        </Text>
      </View>
      
    </View>
  )
}

export default HomeHeader