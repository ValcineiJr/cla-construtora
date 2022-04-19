/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import { useState, useRef } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FakeSpace } from "../../components/FakeSpace";

import background from "../../assets/img/bg.jpg";
import build from "../../assets/img/build2.jpg";

import apartamento1 from "../../assets/img/apartamento1.jpg";
import apartamento2 from "../../assets/img/apartamento2.jpg";
import apartamento3 from "../../assets/img/apartamento3.jpg";
import planta from "../../assets/img/planta.png";
import location from "../../assets/img/location.png";

import facebookSVG from "../../assets/icons/facebook-square.svg";
import linkedinSVG from "../../assets/icons/linkedin.svg";
import whatsappSVG from "../../assets/icons/whatsappfull.svg";
import whatsappWhiteSVG from "../../assets/icons/whatsappWhite.svg";
import circleSVG from "../../assets/icons/circle.svg";
import phoneSVG from "../../assets/icons/phone.svg";
import headsetSVG from "../../assets/icons/headset.svg";
import checkSVG from "../../assets/icons/circle-check.svg";
import envelopeSVG from "../../assets/icons/envelope.svg";

import "react-alice-carousel/lib/alice-carousel.css";
import {
  Container,
  TextSocial,
  Location,
  Form,
  Input,
  TextArea,
  Inputs,
} from "./styles";
import { CarouselComponent } from "../../components/Carosel";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function Enterprises() {
  const column1 = [
    "Apartamentos com 194m²",
    "Energia fotovoltaica",
    "Pele em vidro",
    "Porcelanato",
    "4 quartos, 3 suítes e close",
    "Cobertura ampla com 376m²",
    "Espaço goumert com ofurô",
  ];
  const column2 = [
    "Um apartamento por andar",
    "Garagem para 3 ou 4 carros",
    "Elevador",
    "Esquadrias automatizadas",
    "Água individualizada",
    "Bancada de granito",
    "Prédio todo revestido",
  ];
  const column3 = ["Quartos com suíte", "Closet"];

  const slides2 = [
    {
      id: 0,

      src: apartamento1,
    },
    {
      id: 1,

      src: apartamento2,
    },
    {
      id: 2,

      src: apartamento3,
    },
    {
      id: 3,

      src: apartamento1,
    },
    {
      id: 3,

      src: apartamento2,
    },
    {
      id: 3,

      src: apartamento3,
    },
  ];

  const blueprints = [
    {
      id: 0,

      src: planta,
    },
    {
      id: 1,

      src: planta,
    },
  ];
  const slides = [
    {
      id: 0,

      src: apartamento1,
    },
    {
      id: 1,

      src: apartamento2,
    },
    {
      id: 2,

      src: apartamento3,
    },
    {
      id: 3,

      src: apartamento1,
    },
  ];

  const { width } = useWindowDimensions();

  return (
    <Container>
      <Header />
      <header style={{ backgroundImage: `url(${background})` }} />
      <div className="container">
        <FakeSpace size={width <= 1000 ? 5 : 25} />
        <div className="content">
          <span className="title">O EMPREENDIMENTO</span>
          <h1>Apartamentos modernos e bem planejados</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dolorum sed laborum! Hic quos, nobis velit illum natus magnam autem
            voluptatibus reiciendis id, dignissimos commodi impedit aperiam vel
            neque praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            dolorum sed laborum! Hic quos, nobis velit illum natus magnam autem
            voluptatibus reiciendis id, dignissimos commodi impedit aperiam vel
            neque praesentium.
          </p>
          <img src={build} alt="imagem de um prédio" />
          <div className="socials">
            <span className="color">Compartilhe este imóvel através de</span>
            <ul>
              <li>
                <img src={whatsappSVG} alt="" />
                <TextSocial color="#51C965">WhatsApp</TextSocial>
              </li>
              <li>
                <img src={facebookSVG} alt="" />
                <TextSocial color="#4C72BB">Facebook</TextSocial>
              </li>
              <li>
                <img src={linkedinSVG} alt="" />
                <TextSocial color="#3592C4">Linkedin</TextSocial>
              </li>
            </ul>
          </div>
        </div>
        <FakeSpace size={width <= 1000 ? 5 : 25} />
      </div>

      <div className="box">
        <h1>O Empreendimento</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aliquid
          laudantium necessitatibus ratione, adipisci optio.
        </h2>
        <div className="columns">
          <div className="column">
            <ul>
              {column1.map((item) => (
                <li>
                  <img src={checkSVG} alt="icone de checkado" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <ul>
              {column2.map((item) => (
                <li>
                  <img src={checkSVG} alt="icone de checkado" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="column">
            <ul>
              {column3.map((item) => (
                <li>
                  <img src={checkSVG} alt="icone de checkado" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="carousel">
        <div className="wrapper">
          <CarouselComponent
            space={width <= 1000 ? 5 : 25}
            backgroundColor="#263242"
            numberOfSlides={width <= 1000 ? 1 : 3}
            slides={slides}
            margin={10}
            title="Conheça nossos"
            subtitle="Apartamentos"
          />
        </div>
        <div className="wrapper">
          <CarouselComponent
            space={width <= 1000 ? 5 : 0}
            numberOfSlides={width <= 1000 ? 1 : 5}
            backgroundColor="#F5F5F5"
            slides={slides2}
            margin={2}
            title="Imagens do empreendimento"
            titleStyle={{
              color: "#00A2B9",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 28,
              marginBottom: 20,
            }}
          />
        </div>

        <div className="wrapper">
          <CarouselComponent
            space={width <= 1000 ? 5 : 25}
            backgroundColor="#fff"
            numberOfSlides={width <= 1000 ? 1 : 3}
            slides={slides}
            margin={10}
            title="Vídeos"
            titleStyle={{
              color: "#00A2B9",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 28,
              marginBottom: 20,
            }}
          />
        </div>
        <div className="wrapper">
          <CarouselComponent
            space={width <= 1000 ? 2 : 30}
            type="side"
            backgroundColor="#F7F7F7"
            numberOfSlides={1}
            slides={slides}
            margin={10}
            height={345}
            size="flex"
            title="Apartamentos decorados"
            titleStyle={{
              color: "#00A2B9",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 28,
              marginBottom: 20,
            }}
          />
        </div>
        <div className="wrapper">
          <CarouselComponent
            space={width <= 1000 ? 5 : 30}
            backgroundColor="#fff"
            numberOfSlides={width <= 1000 ? 1 : 2}
            slides={blueprints}
            margin={10}
            height={307}
            title="Plantas do empreendimento"
            titleStyle={{
              color: "#00A2B9",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 28,
              marginBottom: 20,
            }}
          />
        </div>
        <div className="wrapper">
          <CarouselComponent
            space={width <= 1000 ? 2 : 30}
            type="side"
            backgroundColor="#F7F7F7"
            numberOfSlides={1}
            slides={slides}
            margin={10}
            height={345}
            size="flex"
            title="Implantação"
            titleStyle={{
              color: "#00A2B9",
              marginTop: 20,
              fontWeight: "bold",
              fontSize: 28,
              marginBottom: 20,
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#fff",
          }}
          className="wrapper"
        >
          <FakeSpace size={width <= 1000 ? 5 : 25} />
          <Location>
            <img src={location} alt="localização" />
            <div className="address">
              <div>
                <p>Rua Marechal Floriano,</p>
                <p>331, Centro</p>
                <p>Patos de Minas-MG</p>
              </div>

              <button>
                COMO CHEGAR <img src={circleSVG} alt="icone de mais" />
              </button>
            </div>
          </Location>
          <FakeSpace size={width <= 1000 ? 5 : 25} />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5501272406814!2d-46.52043378510624!3d-18.594309987366067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef534847fe519%3A0xb0ffcb2e7206fc8f!2sR.%20Mal.%20Floriano%2C%20331%20-%20Centro%2C%20Patos%20de%20Minas%20-%20MG%2C%2038700-182!5e0!3m2!1spt-BR!2sbr!4v1650206986294!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="wrapper">
          <FakeSpace size={width <= 1000 ? 5 : 25} />
          <Form>
            <img className="env" src={envelopeSVG} alt="icone de envelope" />
            <span className="title">Solicite mais informações</span>
            <span className="subtitle">
              Para mais informações fale conosco através de um de nossos canais
            </span>
            <div className="infos">
              <div className="wrapper">
                <img src={whatsappWhiteSVG} alt="" />
                <span className="text">(48) 9133-0714</span>
              </div>
              <div className="wrapper">
                <img src={phoneSVG} alt="" />
                <span className="text">(48) 3047-0448</span>
              </div>
              <div className="wrapper">
                <button>
                  <img src={headsetSVG} alt="" /> CHAT ONLINE
                </button>
              </div>
            </div>

            <Inputs>
              <div className="left">
                <Input placeholder="Qual o seu nome?" />
                <Input placeholder="Qual o seu e-mail?" />
                <Input placeholder="Qual o seu telefone?" />
              </div>
              <div className="right">
                <TextArea placeholder="Mensagem" />
                <button className="saber">QUERO MAIS INFORMAÇÕES </button>
              </div>
            </Inputs>
          </Form>
          <FakeSpace size={width <= 1000 ? 5 : 25} />
        </div>
      </div>

      <Footer />
    </Container>
  );
}
