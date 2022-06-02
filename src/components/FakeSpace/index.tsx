import { Container } from "./styles";

export function FakeSpace({ size = 20 }: { size?: number }) {
  return <Container value={size} />;
}
