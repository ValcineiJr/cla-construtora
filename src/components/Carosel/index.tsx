/* eslint-disable jsx-a11y/alt-text */
import { memo, useState } from "react";

import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";

import { FakeSpace } from "../FakeSpace";

import arrowSVG from "../../assets/icons/arrowC.svg";

import "@brainhubeu/react-carousel/lib/style.css";
import { Buttons, Container, SliderButton, Slide } from "./styles";
import Modal from "../Modal";

interface SliderProps {
  id: number;
  src: string;
}

interface Props {
  space: number;
  slides: SliderProps[];
  numberOfSlides?: number;
  title?: string;
  subtitle?: string;
  backgroundColor: string;
  margin?: number;
  titleStyle?: any;
  height?: number;
  type?: "bottom" | "side";
  size?: "flex" | "normal";
  backgroundImage?: boolean;
}

export function CarouselComponent({
  space = 25,
  slides,
  numberOfSlides,
  title = undefined,
  subtitle = undefined,
  backgroundColor,
  margin = 0,
  titleStyle = {},
  height = 200,
  type = "bottom",
  size = "normal",
  backgroundImage = false,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  function handlePreviousClick() {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  }

  function handleNextClick() {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  }

  function openImage(id: number) {
    setCurrentImage(id);
    setIsOpen(true);
    handleNextClick();
  }

  function closeImage() {
    handleNextClick();
    setIsOpen(false);
  }

  return (
    <>
      <Modal onBackDropPress={closeImage} onClose={closeImage} show={isOpen}>
        <img src={slides[currentImage].src} alt="" />
      </Modal>
      <Container
        backgroundImage={backgroundImage}
        backgroundColor={backgroundColor}
      >
        {title && (
          <span style={titleStyle} className="title text">
            {title}
          </span>
        )}
        {subtitle && <span className="subtitle text">{subtitle}</span>}

        <div className="wrapper">
          <FakeSpace size={space} />
          <div className="CarouselContent">
            {type === "side" && (
              <SliderButton
                style={{ transform: "rotate(180deg)" }}
                onClick={handlePreviousClick}
              >
                <img src={arrowSVG} alt="" />
              </SliderButton>
            )}

            <Carousel
              draggable
              value={current}
              onChange={onChange}
              // animationSpeed={1000}
              plugins={[
                "infinite",
                "clickToChange",
                "fastSwipe",
                "autoPlay",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: numberOfSlides,
                  },
                },
                // {
                //   resolve: autoplayPlugin,
                //   options: {
                //     interval: 3000,
                //   },
                // },
              ]}
            >
              {slides.map((item) => (
                <Slide
                  onClick={() => openImage(item.id)}
                  margin={margin}
                  style={size === "flex" ? { height: 350 } : { height }}
                >
                  <img key={item.id} className="img-example" src={item.src} />
                  {size === "flex" && (
                    <div className="legend">
                      <span className="legend">
                        Nome da legenda com 1 linha de descrição
                      </span>
                    </div>
                  )}
                </Slide>
              ))}
            </Carousel>
            {type === "side" && (
              <SliderButton onClick={handleNextClick}>
                <img src={arrowSVG} alt="" />
              </SliderButton>
            )}
          </div>
          <FakeSpace size={space} />
        </div>
        {type === "side" && <div className="padding"></div>}
        {type === "bottom" && (
          <Buttons>
            <SliderButton
              style={{ transform: "rotate(180deg)" }}
              onClick={handlePreviousClick}
            >
              <img src={arrowSVG} alt="" />
            </SliderButton>
            <SliderButton onClick={handleNextClick}>
              <img src={arrowSVG} alt="" />
            </SliderButton>
          </Buttons>
        )}
      </Container>
    </>
  );
}
