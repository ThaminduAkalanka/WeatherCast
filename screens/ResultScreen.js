// ResultScreen.js

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  weatherText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
  TempText: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginTop: 230,
  },
  descriptionText: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    marginTop: 250,
  },
  dateText: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
    alignSelf: "center",
  },
});

const ResultScreen = ({ route }) => {
  const { weatherData } = route.params;

  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  return (
    <ImageBackground
      source={require('../assets/Rectangle.png')}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.weatherText}>
          {weatherData.name}, {weatherData.sys.country}
        </Text>
        <Text style={styles.dateText}>Today, {getCurrentDate()}</Text>
        <Text style={styles.TempText}>{weatherData.main.temp}°C</Text>
        <Text style={styles.descriptionText}>
          Weather: {weatherData.weather[0].description}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ResultScreen;
