import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-elements'
import colorValue from '../../Shared/commoStyle/ColorValue'

const ProfileScreen = () => {
  return (
    <View>
      <Avatar
      size={100}
      rounded
      icon={{name:'user', type: 'font-awesome'}}
      containerStyle= {{ backgroundColor: colorValue.primary}}
      />
      <View><Text>HK Lalfakzuala</Text></View>
      <View><Text>Lunglei</Text></View>
      <View>
        <Button buttonStyle={{backgroundColor:colorValue.primary}} title= "Call Now"/>
        <Button buttonStyle={{backgroundColor:colorValue.primary}} title= "Request"/>
      </View>
    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({})