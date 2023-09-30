import { Image, View } from "react-native";
import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";

export function MeteoBasic({ children, style }) {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <Txt>City</Txt>
      <Txt style={s.weather_label}>Label</Txt>
      <View  style={s.temperature_box}>
        <Txt style={s.temperature}>3°</Txt>
        <Image style={s.image}/>
      </View>
    </>
  );
}
