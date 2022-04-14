import React, { useState, useEffect, useContext } from "react"
import { Text, View, SafeAreaView, FlatList } from "react-native"

import { COLORS } from "../constants/theme"
import { FocusedStatusBar, ProfileDetailsCard, HomeHeader } from "../components"

import Profile from "../api/Profile"
import axios from "axios"
import { ProfileContext } from "../context/ProfileContext"

const Home = () => {
  const {result} = useContext(ProfileContext)


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={result}
            renderItem={({ item }) => <ProfileDetailsCard data={item}/>}
            keyExtractor={(item) => item.login.uuid}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View>
                <HomeHeader/>
              </View>
            )}
          />
        </View>

        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
        }}>
            <View style={{ height: 1200, backgroundColor: COLORS.primary}}/>
            <View style={{ flex: 1, backgroundColor: COLORS.white}}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
