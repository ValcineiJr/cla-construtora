import styled from "styled-components";

interface EmptyProps {
  value: number;
}

export const Container = styled.div<EmptyProps>`
  flex: 0 0 ${({ value }) => value}%;
`;
