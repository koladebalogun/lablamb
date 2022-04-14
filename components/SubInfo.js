import { View, Text } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";



export const ProfileDetails = ({username, age, titleSize, subtitleSize}) => {
    return (
        <View>
            <Text style={{ fontSize: titleSize, color: COLORS.primary, fontFamily: FONTS.bold}}>{username}</Text>
            <Text style={{ fontSize: subtitleSize, color: COLORS.primary, fontFamily: FONTS.semiBold}}>{age}</Text>
        </View>
    )
}


export const UploadDate = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.font,
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: "50%"
        }}>
            <Text style={{ fontFamily: FONTS.regular, color: COLORS.white}}>Date Uploaded</Text>
            <Text style={{ fontFamily: FONTS.semiBold, color: COLORS.white}}>13 April</Text>
        </View>
    )
}

export const SubInfo = ({data}) => {
  return (
    <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
    }}>
      <UploadDate />
    </View>
  )
}

