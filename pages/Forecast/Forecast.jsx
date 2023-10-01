import { TouchableOpacity, View } from "react-native";
import { s } from "./Forecast.style";
import { Txt } from "../../compnents/Txt/Txt";
import { Container } from "../../compnents/Container/Container";
import { useNavigation, useRoute } from "@react-navigation/native";
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

  return (
    <Container>
      {header}
    </Container>
  );
}
