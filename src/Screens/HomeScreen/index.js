import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Slider from "../../Shared/components/Slider";
import Body from "./Body";
import { donationRequest } from "./Data";
import DonationComponent from "./DonationComponent";
import { colors } from "../SearchScreen/theme";

const HomeScreen = () => {
  let activeColors = colors;

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: activeColors.secondary,
      }}
    >
      <FlatList
        style={{ marginBottom: 0 }}
        data={donationRequest}
        ListHeaderComponent={() => (
            <View>
              {/* <Slider /> */}
              <Body />
            </View>
        )}
        renderItem={({ item }) => (
          <View style={[{ color: activeColors.accent }, styles.listcard]}>
            <DonationComponent item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  listcard: {
    marginHorizontal:10,
  }
});
