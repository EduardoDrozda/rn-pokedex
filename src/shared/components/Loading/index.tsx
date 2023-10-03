import { Container, LoadingIndicator } from "./styles";

type Props = {
  isFlex?: boolean;
  width?: number;
  height?: number;
};

export function Loading({ isFlex, width, height, ...rest }: Props) {

  return (
    <Container isFlex={isFlex}>
      <LoadingIndicator />
    </Container>
  );
}
