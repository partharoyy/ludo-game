import { ImageBackground, StyleSheet, Text, View, ImageSourcePropType, SafeAreaView } from "react-native";
import React from "react";
import { deviceHeight, deviceWidth } from "@/constants/Scaling";

interface WrapperProps {
  children: React.ReactNode;
  style?: object;
}

const Wrapper: React.FC<WrapperProps> = ({ children, style }) => {
  return (
    <ImageBackground source={require("../assets/images/bg.jpg")} style={styles.container} resizeMode='cover'>
      <SafeAreaView style={[styles.safeArea, { ...style }]}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    width: deviceWidth,
    height: deviceHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
