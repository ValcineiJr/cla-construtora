import { Link } from "react-router-dom";

import FacebookSVG from "../../assets/icons/facebook.svg";
import InstagramSVG from "../../assets/icons/instagram.svg";
import PhoneSVG from "../../assets/icons/phone.svg";
import ZapSVG from "../../assets/icons/whatsapp.svg";
import MapSVG from "../../assets/icons/map-pin.svg";

import { Container, FooterMobile } from "./styles";
import { Logo } from "../Header/styles";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { EmptySpace } from "../../pages/Home/styles";

export function Footer() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Container>
        <div className="firstRow">
          <ul>
            <li>
              <img src={ZapSVG} alt="ícone de whatsapp" />
              <span> 34 9822-0350</span>
            </li>
            <li style={{ margin: "0 30px" }}>
              <img src={PhoneSVG} alt="ícone de telefone" />
              <span> 34 9822-0350</span>
            </li>
          </ul>

          <img
            src={require("../../assets/img/logo2.png")}
            style={{ margin: "0 100px", width: 150 }}
          />

          <div className="location">
            <img src={MapSVG} alt="ícone de localização" />
            <span>
              Rua Dores do Indaiá. 61. Centro <br /> Patos de Minas - MG
            </span>
          </div>
        </div>
        <div className="secondRow">
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
        <div className="thirdRow">
          <div className="iconBox">
            <a
              href="https://www.facebook.com/claconstrutora/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#888"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
          <div className="iconBox">
            <a
              href="https://www.instagram.com/c.l.a_construtora_/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </Container>
      <FooterMobile>
        <EmptySpace value={5} />
        <div className="footer">
          <div className="location">
            <img src={MapSVG} alt="ícone de localização" />
            <span>Rua Dores do Indaiá. 61. Centro Patos de Minas - MG</span>
          </div>
          <div className="thirdRow">
            <div className="iconBox">
              <a
                href="https://www.facebook.com/claconstrutora/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#888"
                  stroke="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
            <div className="iconBox">
              <a
                href="https://www.instagram.com/c.l.a_construtora_/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#888"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <EmptySpace value={5} />
      </FooterMobile>
    </>
  );
}
