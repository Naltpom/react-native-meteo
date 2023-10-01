import { TouchableOpacity, View } from "react-native";
import { s } from "./Forecast.style";
import { Txt } from "../../components/Txt/Txt";
import { Container } from "../../components/Container/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { DAYS, dateToDDMM } from "../../services/date-service";

export default function Forecast() {
  const { params } = useRoute();
  const nav = useNavigation();
  const backButton = (
    <TouchableOpacity style={s.back_btn} onPress={() => nav.goBack()}>
      <Txt>{"<"}</Txt>
    </TouchableOpacity>
  );
  const header = (
    <View style={s.headers}>
      {backButton}
      <View style={s.header_texts}>
        <Txt>{params.city}</Txt>
        <Txt style={s.subtitle}>Prévision sur 7 jours</Txt>
      </View>
    </View>
  );

  const forecastList = (
    <View style={s.forcast_list}>
      {params.time.map((time, index) => {
        const code = params.weathercode[index];
        const image = getWeatherInterpretation(code).image;
        const date = new Date(time);
        const day = DAYS[date.getDay()];
        const temperature = params.temperature_2m_max[index];
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={day}
            date={dateToDDMM(date)}
            temperature={temperature.toFixed(0)}
          ></ForecastListItem>
        );
        // return (
        //   <ForecastListItem
        //     key={time} image={image} day={day} date={date}
        //   ></ForecastListItem>
        // );
      })}
    </View>
  );

  return (
    <Container>
      {header}
      {forecastList}
    </Container>
  );
}
