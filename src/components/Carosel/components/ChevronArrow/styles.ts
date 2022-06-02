import styled, { css } from "styled-components";

interface ContainerProps {
  direction?: "left" | "right";
}

export const Container = styled.button<ContainerProps>`
  width: 40px;
  height: 40px;
  display: flex;

  justify-content: center;
  align-items: center;

  border: 0;

  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;

  ${css<ContainerProps>`
    ${({ direction }) =>
      direction === "right"
        ? "border-right: 1px solid rgba(255, 255, 255, 0.2);"
        : "border-left: 1px solid rgba(255, 255, 255, 0.2);"}
  `}

  background-color: transparent;

  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;
