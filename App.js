/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getWeather } from "./store/actions/weatherActions";
import Form from "./components/Form";
import Weather from "./components/Weather";
import LongWeatherData from "./components/LongWeatherData"


const App = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [longDataVisible, setLongDataVisible] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.weather);

  const searchSubmitHandler = () => {
    if (search === "") {
      return Alert.alert("Validation", "City name is required!", [
        { text: "OK" },
      ]);
    }

    setLoading(true);
    dispatch(
      getWeather(
        search,
        () => setLoading(false),
        () => setLoading(false)
      )
    );
    setSearch("");
    Keyboard.dismiss();
  };

  const longWeatherDataSubmit = () => {
    setLongDataVisible(!longDataVisible);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Form
          search={search}
          onSetSearch={setSearch}
          onSubmit={searchSubmitHandler}
        />
        <Weather
          loading={loading}
          data={data}
          error={error}
          longDataVisible={longDataVisible}
          longWeatherDataSubmit={longWeatherDataSubmit}
        />


      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
