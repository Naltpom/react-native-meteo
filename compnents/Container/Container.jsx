import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/background.png";
import { s } from "./Container.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export function Container({ children }) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={s.img_background}
      imageStyle={s.img}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
