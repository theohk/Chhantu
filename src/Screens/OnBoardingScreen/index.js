import { StatusBar } from "expo-status-bar";
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useFonts } from "expo-font";
import { getMyStringValue, setStringValue } from "../../Global/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import fontValue from "../../Shared/commoStyle/FontValue";
import { commonStyle } from "../../Shared/commoStyle/CommonStyle";

const OnBoardingScreen = () => {

  // const [fontsLoaded] = useFonts({
  //   Font1: require("../../../assets/Fonts/Poppins-Black.ttf"),
  //   Font2: require("../../../assets/Fonts/Poppins-Medium.ttf"),
  //   Font3: require("../../../assets/Fonts/Poppins-ThinItalic.ttf"),
  // });

  const navigation = useNavigation()

  const onBoardingDone = async () => {
    try {
      await setStringValue("onboarding", "true");
      await navigation.navigate("LoginScreen");
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const stringValue = await getMyStringValue("onboarding");
      if (stringValue === "true") {
        navigation.navigate("LoginScreen");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="white" barstyle="dark-content" />
      <Onboarding
        pages={Array}
        onSkip={() => onBoardingDone()}
        onDone={() => onBoardingDone()}
        titleStyles={
          commonStyle({
            fontSize: 25,
          }).text
        }
        subTitleStyles={
          commonStyle({ fontSize: 16 })
            .text
        }
      />
    </View>
  );
};

const Array = [
  {
    backgroundColor: "#fff",
    image: (
      <Image
        source={require("../../../assets/avatar.png")}
        style={{ width: 150, height: 150 }}
      />
    ),
    title: <Text style={{ fontSize: 40, color: "#f06c6c" }}>CHHANTU</Text>,
    subtitle: "",
  },
  {
    backgroundColor: "#fff",
    image: (
      <Image
        source={require("../../../assets/onb1.png")}
        style={{ width: 200, height: 200 }}
      />
    ),
    title: <Text style={{ fontSize: 40, color: "#f06c6c" }}>CHIBAI</Text>,
    subtitle: (
      <Text style={{ fontSize: 20, paddingHorizontal: 50 }}>
        He app ah hian kanlo lawm a che
      </Text>
    ),
  },
  {
    backgroundColor: "#fff",
    image: (
      <Image
        source={require("../../../assets/onb2.png")}
        style={{ width: 200, height: 200 }}
      />
    ),
    title: <Text style={{ fontSize: 40, color: "#f06c6c" }}>TANPUITU</Text>,
    subtitle: (
      <Text style={{ fontSize: 20, paddingHorizontal: 50 }}>
        Mi tana malsawmna i nih theihna leh i mamawh huna tanpuitu i hmuh theihna hmun
      </Text>
    ),
  },
  {
    backgroundColor: "#fff",
    image: (
      <Image
        source={require("../../../assets/onb3.png")}
        style={{ width: 200, height: 200 }}
      />
    ),
    title: <Text style={{ fontSize: 40, color: "#f06c6c" }}>CHHANTU</Text>,
    subtitle: (
      <Text style={{ fontSize: 20, paddingHorizontal: 50 }}>
        I lo hman avangin kan lawm e
      </Text>
    ),
  },
];

export default OnBoardingScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
});




