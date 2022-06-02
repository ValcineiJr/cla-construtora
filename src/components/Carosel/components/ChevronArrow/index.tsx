import ChevronSVG from "../../../../assets/icons/chevron.svg";

import { Container } from "./styles";

interface Props {
  direction?: "left" | "right";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ChevronArrow({ direction = "right", onClick }: Props) {
  return (
    <Container onClick={onClick} direction={direction}>
      <img
        style={{
          transform: direction === "right" ? "rotate(180deg)" : "rotate(0deg)",
        }}
        src={ChevronSVG}
        alt=""
      />
    </Container>
  );
}
