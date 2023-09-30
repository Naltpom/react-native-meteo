import { View } from "react-native";
import {
  s,
  StyledLabel,
  StyledValue,
  StyledContainer,
} from "./MeteoAdvanced.style";

export function MeteoAdvanced({ dusk, down, wind }) {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{dusk}</StyledValue>
        <StyledLabel>Aube</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{down}</StyledValue>
        <StyledLabel>Crépuscule</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{wind} km/h</StyledValue>
        <StyledLabel>Vent</StyledLabel>
      </StyledContainer>
    </View>
  );
}
