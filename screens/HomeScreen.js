import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  gradientBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/Rectangle.png')}
      style={styles.gradientBackground}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/weatherIcon.png')}
          style={styles.image}
        />
        <Button
          title="Search City"
          onPress={() => navigation.navigate("Search")}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
