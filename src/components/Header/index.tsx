import { Link } from "react-router-dom";

import PhoneSVG from "../../assets/icons/phone.svg";
import ZapSVG from "../../assets/icons/whatsapp.svg";
import MailSVG from "../../assets/icons/mail.svg";
import FacebookSVG from "../../assets/icons/facebook.svg";
import InstagramSVG from "../../assets/icons/instagram.svg";
import MenuSVG from "../../assets/icons/menu.svg";

import { Logo, Container, MobileHeader } from "./styles";
import { FakeSpace } from "../FakeSpace";

export function Header() {
  return (
    <>
      <Container>
        <FakeSpace />
        <div className="wrapper">
          <img
            src={require("../../assets/img/logo2.png")}
            style={{ width: 150 }}
          />
          <div className="menu">
            <div className="rowOne">
              <ul>
                <li>
                  <img src={ZapSVG} alt="ícone de whatsapp" />
                  <span> 34 9822-0350</span>
                </li>
                <li style={{ margin: "0 30px" }}>
                  <img src={PhoneSVG} alt="ícone de telefone" />
                  <span> 34 9822-0350</span>
                </li>
                <li>
                  <img src={MailSVG} alt="ícone de whatsapp" />
                  <span> contato@clsconstrutora.com.br</span>
                </li>
              </ul>
            </div>
            <div className="rowTwo">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/sobre">Quem somos</Link>
                </li>
                <li>
                  <Link to="/empreendimentos">Empreendimentos</Link>
                </li>
                <li>
                  <Link to="/faleconosco">Fale conosco</Link>
                </li>
              </ul>
              <div
                style={{ marginRight: 16, marginLeft: 50 }}
                className="iconBox"
              >
                <a
                  href="https://www.facebook.com/claconstrutora/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={FacebookSVG} alt="ícone de whatsapp" />
                </a>
              </div>
              <div className="iconBox">
                <a
                  href="https://www.instagram.com/c.l.a_construtora_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={InstagramSVG} alt="ícone de whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <FakeSpace />
      </Container>
      <MobileHeader>
        {/* <Logo style={{ position: "absolute", left: 16, top: 16 }} /> */}
        <img
          src={require("../../assets/img/logo2.png")}
          style={{ width: 150, position: "absolute", left: 16, top: 16 }}
        />
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Quem somos</Link>
            </li>
            <li>
              <Link to="/empreendimentos">Empreendimentos</Link>
            </li>
            <li>
              <Link to="/faleconosco">Fale conosco</Link>
            </li>
          </ul>
        </div>
      </MobileHeader>
    </>
  );
}
