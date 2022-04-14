import React from "react"
import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from "react-native"

import { COLORS, SIZES, assets, FONT, FONTS } from '../constants'
import {CircleButton, RectButton, SubInfo, ProfileDesc} from '../components'

const DetailsHeader = ({data, navigation}) => (
  <View style={{ width: '100%', height: 373}}>
    <Image 
      source={{ uri: data.picture.large}}
      resizeMode = "cover"
      style={{
        width: "100%",
        height: "100%",
      }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      handlePress={() => navigation.goBack()}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
)

const Details = ({ route, navigation}) => {
  const {data} = route.params;

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FlatList 
        data={data.data}
        // renderItem={({ item }) => <ProfileDesc data={item}/>}
        keyExtractor={(item) => item.login.uuid}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation}/>
            <SubInfo />
            <View style={{ padding: SIZES.font}}>
              <ProfileDesc data={data}/>
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details