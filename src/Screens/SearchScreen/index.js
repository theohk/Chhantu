import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Slider from "../../Shared/components/Slider";
import Body from "./Body";
import { donationRequest } from "./Data";
import DonationComponent from "./DonationComponent";
import { newsData } from "./Data1";
import NewsItem from "./NewsItem";
import NewsSection from "./NewsSection";
import StyledText from "./StyledText";
import { colors } from "./theme";

const SearchScreen = () => {
  let activeColors = colors;

   const sortedNewsData = newsData.sort((a, b) => {
     if (a.title < b.title) {
       return -1;
     }
     if (a.title > b.title) {
       return 1;
     }
     return 0;
   });

   return (
     <View
       style={[
         {
           backgroundColor: activeColors.secondary,
         },
         styles.settingsItem,
       ]}
     >
       <StyledText style={[styles.sectionTitle, styles.title]} big>
         Hospitals
       </StyledText>
       <NewsSection data={sortedNewsData} />
     </View>
   );
};

export default SearchScreen;

const styles = StyleSheet.create({
  title: {
    marginLeft: 25,
    paddingVertical: 10,
    color: "#4b5563",
  },
});
