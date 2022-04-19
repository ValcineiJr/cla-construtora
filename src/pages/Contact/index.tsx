/* eslint-disable jsx-a11y/iframe-has-title */
import { FakeSpace } from "../../components/FakeSpace";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import background from "../../assets/img/bg.jpg";

import { Container, Infos } from "./styles";
import { SubTitle, Title } from "../About/styles";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface InputProps {
  label: string;
  flex?: number;
  type?: string;
}

export function Contact() {
  const { width } = useWindowDimensions();
  const asides = [
    { id: "0", title: "Atendimento", value: "34 9 8822-0350" },
    { id: "1", title: "WhatsApp", value: "34 9 8822-0350" },
    {
      id: "2",
      title: "Envie um e-mail",
      value: "contato@claconstrutora.com.br",
    },
    {
      id: "3",
      title: "Localização",
      value: "Rua Dores do indaiá, 61, Centro Patos de Minas - MG",
    },
  ];

  const Input = ({ label, flex = 1, type = "text" }: InputProps) => (
    <div style={{ flex }} className="input">
      <span className="label">{label}</span>
      {type === "text" ? (
        <input type="text" placeholder="Digite aqui" />
      ) : (
        <textarea placeholder="Digite aqui" />
      )}
    </div>
  );

  return (
    <Container>
      <Header />
      <header style={{ backgroundImage: `url(${background})` }}>
        <FakeSpace size={width <= 1000 ? 5 : 25} />
        <div className="wrapper">
          <SubTitle>
            <span>FALE</span> / CONOSCO
          </SubTitle>
          <Title>
            Fale <p> conosco</p>
          </Title>
          <SubTitle>
            A CLA Construtora atua no ramo de construção civil desde 2013,
            desenvolvendo projetos imobiliários de alto padrão que atendam ao
            mercado e as necessidades de cada cliente.
          </SubTitle>
        </div>
        <FakeSpace size={width <= 1000 ? 5 : 0} />
      </header>
      <div className="wrapper">
        <FakeSpace size={width <= 1000 ? 5 : 25} />
        <Infos>
          <aside className="left">
            <span className="title">Informações de contato</span>
            {asides.map((item) => (
              <div key={item.id} className="row">
                <span className="subtitle">{item.title}</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </aside>
          <aside className="right">
            <Input label="Nome" />
            <Input label="E-mail" />
            <div className="wrapper">
              <Input label="Telefone" />
              <Input flex={2} label="Assunto" />
            </div>
            <Input label="Mensagem" type="area" />

            <button>enviar mensagem</button>
          </aside>
        </Infos>
        <FakeSpace size={width <= 1000 ? 5 : 25} />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5501272406814!2d-46.52043378510624!3d-18.594309987366067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef534847fe519%3A0xb0ffcb2e7206fc8f!2sR.%20Mal.%20Floriano%2C%20331%20-%20Centro%2C%20Patos%20de%20Minas%20-%20MG%2C%2038700-182!5e0!3m2!1spt-BR!2sbr!4v1650206986294!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div className="border"></div>
      <Footer />
    </Container>
  );
}
