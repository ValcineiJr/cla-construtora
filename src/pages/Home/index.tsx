import useWindowDimensions from "../../hooks/useWindowDimensions";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import ZapSVG from "../../assets/icons/whatsapp.svg";
import ZapWSVG from "../../assets/icons/whatsappWhite.svg";
import background from "../../assets/img/bg.jpg";
import BuildIMG from "../../assets/img/build.png";

import { Container, Main, Informations, EmptySpace, ThirdRow } from "./styles";

export function Home() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <Header />
      <header style={{ backgroundImage: `url(${background})` }}></header>
      <Main>
        <span>CONHEÇA NOSSO</span>
        <h1>Empreendimento</h1>

        <Informations>
          <div className="firstRow">
            <EmptySpace value={width <= 1000 ? 5 : 25} />
            <div className="boxInformation">
              <img src={BuildIMG} alt="" />
              <div className="infoWrapper">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi deserunt atque reiciendis asperiores optio dolorum
                  sit mollitia temporibus nobis hic, accusantium nesciunt! Qui
                  facilis rem repellendus a quas, explicabo exercitationem?
                </p>
                <button>MAIS DETALHES</button>
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
                  <a href="#">QUERO SABER MAIS</a> <span>+</span>
                </div>
              </div>
              <aside style={{ backgroundImage: `url(${background})` }}></aside>
            </div>
          </div>

          <ThirdRow>
            <div className="infos">
              <span className="title">Possui interesse?</span>
              <span className="subtitle">Fale conosco</span>
            </div>
            <div className="number">
              <img src={ZapSVG} alt="ícone de whatsapp" />
              <span> 34 9822-0350</span>
            </div>
            <button>
              <img src={ZapWSVG} alt="ícone de whatsapp" />
              <span> CHAME NO WHATSAPP</span>
            </button>
          </ThirdRow>

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
                <button>
                  <img src={ZapWSVG} alt="ícone de whatsapp" />
                  <span> CHAME NO WHATSAPP</span>
                </button>
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
