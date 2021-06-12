/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Button } from "react-native";

import WeatherData from "./WeatherData";
import LongWeatherData from "./LongWeatherData";

const Weather = ({
  loading,
  data,
  error,
  longDataVisible,
  longWeatherDataSubmit,
}) => {
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!loading && !data) {
    return null;
  }

  return (
    <View style={styles.container}>
    {/* if is loading show loading, if long data asked show, else show normal data */}
      {loading ? (
        <ActivityIndicator size="large" color="#00d1b2" />
      ) : longDataVisible ? (
         <LongWeatherData data={data} />
      ) : (
       <WeatherData data={data} /> 
      )} 
        <Button
          title= {longDataVisible ? "Current Forecast" : "7 Day Forecast" }
          style={styles.boxLabel}
          onPress={longWeatherDataSubmit}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  error: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
  },
  boxLabel: {
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 5,
  },
});

export default Weather;
