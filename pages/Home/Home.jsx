import { Text, View } from "react-native";
import { s } from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoApi } from "../../api/meteo";
import { Txt } from "../../compnents/Txt/Txt";
import { MeteoBasic } from "../../compnents/MeteoBasic/MeteoBasic";

export default function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
    }
  }, [coords]);

  async function getUserLocation() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();

      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  async function fetchWeather(coordinates) {
    const weatherResponse = await MeteoApi.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  }

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic></MeteoBasic>
      </View>
      <View style={s.searchbar}>
        <Text>Hello</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text>Hello</Text>
      </View>
    </>
  );
}
