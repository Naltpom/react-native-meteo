import { Text, View } from "react-native";
import { s } from "./Home.style";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";

export default function Home() {
  const [coords, setCoords] = useState([]);

  useEffect(() => {
    getUserLocation();
  }, []);

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

  console.log(coords);
  return (
    <>
      <View style={s.meteo_basic}>
        <Text>Hello</Text>
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
