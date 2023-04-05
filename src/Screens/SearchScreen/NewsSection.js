import { FlatList, StyleSheet } from "react-native";
import NewsItem from "./NewsItem";
import { colors } from "./theme";

const NewsSection = ({ data }) => {
 let activeColors = colors;

  return (
    <FlatList
      style={[
        {
          backgroundColor: activeColors.secondary,
          marginBottom: 50,
        },
        styles.settingsItem,
      ]}
      data={data}
      renderItem={({ item }) => <NewsItem {...item} />}
      keyExtractor={({ id }) => id.toString()}
      // horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 25,
        paddingTop: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 25,
    paddingVertical: 10,
  },
});


export default NewsSection;
