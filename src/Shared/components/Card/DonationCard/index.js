import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import colorValue from "../../../commoStyle/ColorValue";
import {
  commonJustify,
  commonStyle,
} from "../../../commoStyle/CommonStyle";
import fontValue from "../../../commoStyle/FontValue";



const DonationCard = ({ item }) => {
  return (
    <View style={[styles.main, commonJustify.rowSpaceBetween]}>
      <View>
        <View style={[styles.margin]}>
          <Text
            style={
              commonStyle({
                fontSize: 13,
              }).text
            }
          >
            Name
          </Text>
          <Text
            style={
              commonStyle({
                fontSize: 14,
                color: colorValue.liteDark2,
              }).text
            }
          >
            {item.name}
          </Text>
        </View>

        <View style={[styles.margin]}>
          <Text
            style={
              commonStyle({
                fontSize: 13,
              }).text
            }
          >
            Location
          </Text>
          <Text
            style={
              commonStyle({
                fontSize: 14,
                color: colorValue.liteDark2,
              }).text
            }
          >
            {item.location}
          </Text>
        </View>

        <View style={[styles.margin]}>
          <Text
            style={
              commonStyle({
                fontSize: 13,
              }).text
            }
          >
            {item.time}
          </Text>
        </View>
      </View>

      {/* <View style={{ paddingTop: 20 }}>
        <Image
          style={{ width: 100 }}
          resizeMode="contain"
          source={require("../../../../../assets/image/BloodGroupB.png")}
        />
        <Button
          titleStyle={{ color: colorValue.primary }}
          type="clear"
          title="Donate"
        />
      </View> */}
    </View>
  );
};

export default DonationCard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    marginTop: 10,
  },
  margin: {
    marginLeft: 10,
    padding: 5,
  },
});
