import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "./theme";
import StyledText from "./StyledText";
import { useNavigation } from "@react-navigation/native";

const NewsItem = ({ image, title, style, avatar, author, date, content, ...props }) => {
  const navigation = useNavigation();
  let activeColors = colors;

  return (
    <TouchableOpacity
      style={[{ backgroundColor: activeColors.primary,  }, styles.imageCard]}
      {...props}
    >
      {/* <View style={styles.imageCard}> */}
      <Image source={image} style={styles.image} />
      {/* </View> */}

      <View style={styles.bottomSection}>
        <StyledText numberOfLines={2} style={[{ color: activeColors.tertiary }, styles.title]} bold>
          {title}
        </StyledText>

        <View style={styles.authorRow}>
          <View style={styles.author}>
            {/* <Image source={avatar} style={styles.avatar} /> */}
            <StyledText
              style={[{ color: activeColors.tertiary }, styles.author]}
              bold
            >
              {author}
            </StyledText>
          </View>
          {/* <StyledText
          style={[{ color: activeColors.tertiary }, styles.date]}
          small
        >
          {date}
        </StyledText> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    //borderRadius: 20,
    height: 260,
    width: "100%",
    marginBottom: 20,
    borderRadius: 25,
    //////////////////////
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 25,
  },
  imageCard: {
    height: 250,
    width: "100%",
    borderRadius: 25,
    backgroundColor: "#ffffff",
    borderRadius: 27,
    elevation: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 7.5,
    marginRight: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 15,
  },
  bottomSection: {
    padding: 5,
    flex: 1,
    marginLeft: 5,
    justifyContent: "flex-start",
  },
  author: {
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  date: {
    textAlign: "right",
    flex: 2,
  },
  authorRow: {
    // marginLeft:5,
    marginTop: 2.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default NewsItem;
