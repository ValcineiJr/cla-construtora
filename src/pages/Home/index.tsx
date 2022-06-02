import { useState } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import ZapSVG from "../../assets/icons/whatsapp.svg";
import ZapWSVG from "../../assets/icons/whatsappWhite.svg";
import background from "../../assets/img/bg.jpg";
import BuildIMG from "../../assets/img/build.png";
import LogoIMG from "../../assets/img/logo.png";
import LogoWIMG from "../../assets/img/logo-white.png";

import { Container, Main, Informations, EmptySpace, Slider } from "./styles";
import { ChevronArrow } from "../../components/Carosel/components/ChevronArrow";
import { FakeSpace } from "../../components/FakeSpace";

export function Home() {
  const { width } = useWindowDimensions();
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  const texts = [
    {
      id: "0",
      title: "conheça o empreendimento",
      subtitleOne: "Toda a estrutura de um imóvel",
      subtitleTwo: "de alto nível que você procura!",
    },
    {
      id: "1",
      title: "conheça o empreendimento",
      subtitleOne: "Toda a estrutura de um imóvel",
      subtitleTwo: "de alto nível que você procura!",
    },
  ];

  function handlePreviousClick() {
    const previous = current - 1;
    setCurrent(previous < 0 ? texts.length - 1 : previous);
  }

  function handleNextClick() {
    const next = current + 1;
    setCurrent(next === texts.length ? 0 : next);
  }

  return (
    <Container>
      <Header />
      <header style={{ backgroundImage: `url(${background})` }}>
        <FakeSpace size={width <= 1000 ? 5 : 22} />

        <Slider>
          <img src={LogoWIMG} className="logo" />
          <ChevronArrow onClick={handlePreviousClick} direction="left" />
          <Carousel
            plugins={[
              "infinite",
              "fastSwipe",
              {
                resolve: autoplayPlugin,
                options: {
                  interval: 3000,
                },
              },
            ]}
            value={current}
            onChange={onChange}
          >
            {texts.map((item) => (
              <div className="content" key={item.id}>
                <p className="title">{item.title}</p>
                <p className="one">{item.subtitleOne}</p>
                <p className="two">{item.subtitleTwo}</p>
              </div>
            ))}
          </Carousel>
          <ChevronArrow onClick={handleNextClick} />
        </Slider>

        <FakeSpace size={width <= 1000 ? 5 : 22} />
      </header>

      <Main>
        <span>CONHEÇA NOSSO</span>
        <h1>Empreendimento</h1>

        <Informations>
          <div className="firstRow">
            <EmptySpace value={width <= 1000 ? 5 : 25} />
            <div className="boxInformation">
              <img className="build" src={BuildIMG} alt="" />
              <img className="logo" src={LogoIMG} alt="" />
              <div className="infoWrapper">
                <p>
                  Desenvolvemos empreendimentos diferenciados que atendem os
                  desejos do mercado residencial de alto padrão.
                </p>
                <a href="/empreendimentos">MAIS DETALHES</a>
              </div>
            </div>
            <EmptySpace value={width <= 1000 ? 5 : 25} />
          </div>

          <div className="secondRow">
            <EmptySpace value={width <= 1000 ? 5 : 25} />
            <div className="boxSecondInformation">
              <div>
                <span className="title">A CLA</span>
                <span className="subtitle">CONSTRUTORA</span>
                <p className="title">
                  A CLA Construtora atua no roma de construção civil desde 2013,
                  desenvolvendo projetos imobiliários de lato padrão que atendam
                  ao mercado e as necessidades de cada cliente.
                </p>

                <p className="subtitle">
                  Contando com uma equipe de profissionais experientes e
                  capacitados, cada etapa de suas obras é acompanhada
                  minuciosamente para honrar o compromisso com a qualidade
                  construtiva e atende as expectativas dos mais exigentes
                </p>

                <div className="link">
                  <a href="/empreendimentos">QUERO SABER MAIS</a> <span>+</span>
                </div>
              </div>
              <aside style={{ backgroundImage: `url(${background})` }}></aside>
            </div>
          </div>

          <div className="thirdRow">
            <div className="container">
              <div className="content">
                <div className="infos">
                  <span className="title">Possui interesse?</span>
                  <span className="subtitle">Fale conosco</span>
                </div>
                <div className="number">
                  <img src={ZapSVG} alt="ícone de whatsapp" />
                  <span> 34 9822-0350</span>
                </div>

                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=3498220350"
                  rel="noreferrer"
                >
                  <img src={ZapWSVG} alt="ícone de whatsapp" />
                  <span> CHAME NO WHATSAPP</span>
                </a>
              </div>
            </div>
            <EmptySpace value={width <= 1000 ? 5 : 30} />
          </div>
        </Informations>
      </Main>
      <Footer />
    </Container>
  );
}
