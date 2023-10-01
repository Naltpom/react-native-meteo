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
import { getWeatherInterpretation } from "../../services/meteo-service";
import { MeteoAdvanced } from "../../compnents/MeteoAdvanced/MeteoAdvanced";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../compnents/Container/Container";

export default function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const currentWeather = weather?.current_weather;
  const nav = useNavigation();

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
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

  async function fetchCity(coordinates) {
    const cityResponse = await MeteoApi.fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  }

  function goToForcastPage() {
    nav.navigate("Forecast", { city, ...weather.daily });
  }

  return currentWeather ? (
    <Container>
      <View style={s.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
          onPress={goToForcastPage}
        />
      </View>
      <View style={s.searchbar}>
        <Text></Text>
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          wind={currentWeather.windspeed}
          dusk={weather.daily.sunrise[0].split("T")[1]}
          down={weather.daily.sunset[0].split("T")[1]}
        />
      </View>
    </Container>
  ) : null;
}
