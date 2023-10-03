import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Container } from "./styles";

type Props = {
  isFlex?: boolean;
  width?: number;
  height?: number;
};

export function Loading({ isFlex, width, height, ...rest }: Props) {
  const animation = useRef(null);

  return (
    <Container isFlex={isFlex}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: width ?? 200,
          height: height ?? 200,
        }}
        source={require("@assets/lottie/pokeball.json")}
      />
    </Container>
  );
}
