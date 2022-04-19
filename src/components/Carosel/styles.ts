import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;

  background-color: ${({ backgroundColor }) => backgroundColor};
  flex-direction: column;

  .padding {
    margin-bottom: 40px;

    /* background-color: red; */
  }

  .wrapper {
    display: flex;

    .CarouselContent {
      display: flex;
      /* background-color: red; */
      flex: 1;
      overflow-x: hidden;
      align-items: center;
    }
  }

  .img-example-small {
    width: 80px;
    height: 50px;
  }

  .carousel {
    padding-top: 60px;
    span.text {
      color: white;
      text-align: center;
    }

    .title {
      font-size: 14px;
    }

    .subtitle {
      font-weight: bold;
      font-size: 28px;
      margin-bottom: 30px;
    }
  }
`;

export const SliderButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;

  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: 0;
  cursor: pointer;

  @media (max-width: 1000px) {
    img {
      width: 30px !important;
      height: 30px !important;
    }
  }

  img {
    width: 45px;
    height: 45px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  height: 100px;
  margin-bottom: 30px;
`;
interface SlideProps {
  margin: number;
}
export const Slide = styled.div<SlideProps>`
  position: relative;
  /* background-color: red; */
  display: flex;
  margin: 0 ${({ margin }) => margin}px;
  flex: 1;
  height: 200px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  /* justify-content: center; */
  div.legend {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 50px;

    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  img {
    width: 100%;
  }
`;
