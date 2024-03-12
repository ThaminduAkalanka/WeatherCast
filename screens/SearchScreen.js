// SearchScreen.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, ImageBackground, Image } from "react-native";
import { fetchWeatherData } from "../api/weather";
import ResultScreen from "./ResultScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    textAlign:"center",
    borderRadius: 10,

  },
  image: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
});

const SearchScreen = ({ navigation }) => {
  const [city, setCity] = useState("");

  const handleSearch = async () => {
    try {
      const data = await fetchWeatherData(city);
      navigation.navigate("ResultScreen", { weatherData: data });
    } catch (error) {
      // Handle the error
    }
  };

  return (
    <ImageBackground
      source={require('../assets/Rectangle.png')}
      style={styles.imageBackground}
    >
 
      <View style={styles.container}>
      <Image
          source={require('../assets/weatherIcon.png')}
          style={styles.image}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter a city"
          onChangeText={(text) => setCity(text)}
          value={city}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;
