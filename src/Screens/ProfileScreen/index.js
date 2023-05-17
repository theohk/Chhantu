import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { Avatar, Button, ListItem, Icon } from "react-native-elements";
import colorValue from "../../Shared/commoStyle/ColorValue";
import {
  commonJustify,
  commonStyle,
} from "../../Shared/commoStyle/CommonStyle";
import fontValue from "../../Shared/commoStyle/FontValue";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebase";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <View>
        <Text style={styles.heading}>PROFILE</Text>
      </View>
      <View style={[commonJustify.rowCenter, { marginVertical: 20 }]}>
        <Avatar
          size={100}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: colorValue.primary }}
        />
      </View>
      <View>
        <Text
          style={[
            commonStyle({ fontSize: 25, color: colorValue.liteDark }).text,
            commonJustify.textCenter,
          ]}
        >
          {auth.currentUser?.email}
        </Text>
      </View>
      {/* <View style={[commonJustify.rowCenter, { marginVertical: 20 }]}>
        <Icon name="map" />
        <Text
          style={[
            commonStyle({ fontSize: 15, color: colorValue.liteDark }).text,
            commonJustify.textCenter,
          ]}
        >
          Lunglei
        </Text>
      </View> */}

      <View style={[commonJustify.rowSpaceEvenly, { marginVertical: 20 }]}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Request</Text>
        </TouchableOpacity>
      </View>

      <View style={commonJustify.rowSpaceEvenly}>
        <View style={styles.card}>
          <Text
            style={[
              commonStyle({ fontSize: 24, fontFamily: fontValue.PoninsBold })
                .text,
              { textAlign: "center" },
            ]}
          >
            A+
          </Text>
          <Text
            style={[
              commonStyle({
                fontSize: 14,
                fontFamily: fontValue.PoppinsRegular,
              }).text,
              { textAlign: "center" },
            ]}
          >
            Blood Type
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={[
              commonStyle({ fontSize: 24, fontFamily: fontValue.PoninsBold })
                .text,
              { textAlign: "center" },
            ]}
          >
            05
          </Text>
          <Text
            style={[
              commonStyle({
                fontSize: 14,
                fontFamily: fontValue.PoppinsRegular,
              }).text,
              { textAlign: "center" },
            ]}
          >
            Donated
          </Text>
        </View>
        <View style={styles.card}>
          <Text
            style={[
              commonStyle({ fontSize: 24, fontFamily: fontValue.PoninsBold })
                .text,
              { textAlign: "center" },
            ]}
          >
            02
          </Text>
          <Text
            style={[
              commonStyle({
                fontSize: 14,
                fontFamily: fontValue.PoppinsRegular,
              }).text,
              { textAlign: "center" },
            ]}
          >
            Requested
          </Text>
        </View>
      </View>

      {/* <View>
        {List.map((item, i) => (
            <ListItem key={i} bottomDivider>
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron/>
            </ListItem>
          ))}
      </View> */}

      <View style={{ marginVertical: 20 }}>
        {/* <ListItem>
          <Icon name="inbox" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>Available for donation</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem> */}
        {/* <ListItem>
          <Icon
            name="trash-can-outline"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>Invite friend</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem> */}
        {/* <ListItem>
          <Icon
            name="trash-can-outline"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>Get Help</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem> */}
        <ListItem>
          <Icon name="logout" type="material-community" color="grey" />
          <ListItem.Content>
            <TouchableOpacity onPress={handleSignOut}>
              <ListItem.Title>Sign Out</ListItem.Title>
            </TouchableOpacity>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: colorValue.white,
    padding: 25,
    borderRadius: 10,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  button: {
    backgroundColor: "#EE4B2B",
    width: 175,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

// const list = [
//   {
//     title: 'Available for donation',
//     icon: 'av-timer'
//   }
// ]
