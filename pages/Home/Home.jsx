import { Text, View } from "react-native";
import { s } from "./Home.style";

export default function Home() {
  return (
    <>
      <View style={s.meteo_basic}><Text>Hello</Text></View>
      <View style={s.searchbar}><Text>Hello</Text></View>
      <View style={s.meteo_advanced}><Text>Hello</Text></View>
    </>
  );
}
