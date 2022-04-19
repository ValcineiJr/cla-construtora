import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import background from "../../assets/img/bg.jpg";

import { Container, SubTitle, Title } from "./styles";
import { FakeSpace } from "../../components/FakeSpace";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export function About() {
  const { width } = useWindowDimensions();
  return (
    <Container>
      <Header />
      <header style={{ backgroundImage: `url(${background})` }}>
        <FakeSpace size={width <= 1000 ? 5 : 25} />
        <div className="wrapper">
          <SubTitle>
            <span>HOME</span> / QUEM SOMOS
          </SubTitle>
          <Title>
            Quem <p> somos</p>
          </Title>
          <SubTitle>
            A CLA Construtora atua no ramo de construção civil desde 2013,
            desenvolvendo projetos imobiliários de alto padrão que atendam ao
            mercado e as necessidades de cada cliente.
          </SubTitle>
        </div>
        <FakeSpace size={width <= 1000 ? 5 : 25} />
      </header>
      <div className="content">
        <FakeSpace size={width <= 1000 ? 5 : 25} />
        <aside>
          <div className="first-child">
            <h2>EQUIPE DE</h2>
            <h1>PROFISSIONAIS</h1>
            <p className="bold">
              Contando com uma equipe de profissionais experientes e
              capacitados, cada etapa de suas obras é acompanhada minuciosamente
              para honrar o compromisso com a qualidade constuitiva e atender as
              expectativas dos mais exigentes.
            </p>
            <p className="normal">
              Em seus projetos, a tecnologia, o excelente padrão de acabamento e
              a sustentabilidade são as marcas registradas da CLA Construtora,
              percebidos pelos clientes em cada um dos empreendimentos.
            </p>
            <p className="normal">
              Com o compromisso de sastifazer seus clientes com ética e
              transparência, a equipe atua com profissionalismo nas negociações,
              dinamismo e bom atendimento.
            </p>
            <p className="normal">
              O mercado de alto padrão exige o desenvolvimento de construções
              que oferecem qualidade na execução e possam representar a
              realização de um sonho, por isso nossos imóveis contam com um
              design moderno e funcional, além de estarem presentes nas melhores
              localizações das cidades.
            </p>
          </div>

          <div
            className="banner"
            style={{ backgroundImage: `url(${background})` }}
          ></div>
        </aside>
        <FakeSpace size={width <= 1000 ? 5 : 0} />
      </div>

      <div className="container">
        <FakeSpace size={width <= 1000 ? 5 : 25} />
        <div className="greenContainer">
          <div className="row">
            <div className="wrapper">
              <span className="title">Missão</span>
              <span className="subTitle">
                Buscar o crescimento através da união das pessoas, visando a
                satisfação de seus cooperadados, valorizando a equipe e os
                parceiros comprometidos, respeitando a sociedade e o meio
                ambiente, gerando resultados positivos para todos os envolvidos.
              </span>
            </div>
            <div className="wrapper">
              <span className="title">Visão</span>
              <span className="subTitle">
                Planejamento, desenvolvimento de projetos e gerenciamento do
                cooperativas habitacionais autofinanciadas.
              </span>
            </div>
          </div>

          <span className="title">Objetivos</span>
          <span className="subTitle">
            Satisfazer seus cooperados, superando as expectativas. Valorizar
            seus funcionários criando um ambiente de trabalho positivo. Buscando
            sempre excelência.
          </span>
        </div>
        <FakeSpace size={width <= 1000 ? 5 : 25} />
      </div>
      <Footer />
    </Container>
  );
}
