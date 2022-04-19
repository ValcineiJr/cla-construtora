import { Container } from "./styles";

export function FakeSpace({ size = 25 }: { size?: number }) {
  return <Container value={size} />;
}
