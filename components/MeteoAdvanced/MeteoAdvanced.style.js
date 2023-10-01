import { StyleSheet, View } from "react-native";
import { Txt } from "../Txt/Txt";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "#00000043",
  },
});

export function StyledLabel({ children }) {
  return <Txt style={{ fontSize: 15 }}>{children}</Txt>;
}

export function StyledValue({ children }) {
  return <Txt style={{ fontSize: 20 }}>{children}</Txt>;
}

export function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}
