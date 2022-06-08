import styled from "styled-components";

import bgimage2 from "../../assets/img/build4.jpg";

export const Container = styled.div`
  iframe {
    width: 100%;
    height: 480px;

    border: 0;
  }
  header {
    height: 600px;
    width: 100%;

    display: flex;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .build-banner {
      position: absolute;
      height: 600px;
      right: 0;

      opacity: 0.4;
    }
  }

  .container {
    display: flex;
    margin-top: 70px;
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;

    text-align: left;

    /* background-color: red; */

    .build {
      display: flex;
      width: 100%;
      height: 600px;

      overflow: hidden;

      img {
        width: 100%;
        height: 1200px;

        /* object-fit: cover; */
      }
    }

    p {
      font-weight: 300;
      font-size: 14px;
      line-height: 22px;

      margin-bottom: 20px;
    }

    .title {
      color: #09393a;
      font-weight: bold;
      font-size: 12px;
      text-align: center;
    }

    h1 {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 20px;
      font-weight: 300;
    }

    @media (max-width: 1000px) {
      .socials {
        .color {
          align-self: center;
        }
        ul {
          flex-direction: column;
          gap: 20px !important;
        }
      }
    }

    .socials {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      padding: 20px 30px;
      border: 1px solid #cecece;
      margin-bottom: 80px;

      span.color {
        color: #888;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 50px;
      }

      ul > li {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      ul > li > img {
        height: 24px;
        width: 24px;
      }
    }
  }

  .wrapper {
    display: flex;
  }

  .box {
    display: flex;
    flex: 1;
    flex-direction: column;

    margin-top: 60px;

    text-align: center;

    background-color: #f7f7f7;
    padding-top: 30px;
    padding-bottom: 40px;

    h1,
    h2 {
      color: ${({ theme }) => theme.colors.secondaryText};
    }

    h1 {
    }

    h2 {
      font-size: 14px;
      font-weight: 400;
      width: 100%;
      max-width: 500px;
      margin: 10px auto;
    }

    @media (max-width: 1000px) {
      .columns {
        flex-direction: column;
        align-items: center;
        gap: 40px !important;
      }

      .column {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .columns {
      display: flex;
      margin-top: 20px;

      gap: 80px;

      justify-content: center;

      .column > ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;

        @media (max-width: 1000px) {
          width: 250px !important;
        }

        li {
          display: flex;
          align-items: center;
        }

        li > span {
          color: #888;
          font-weight: bold;
          font-size: 13px;
          margin-left: 8px;
        }

        /* background-color: red; */
      }
    }
  }

  .carousel {
    display: flex;
    width: 100%;

    background-image: linear-gradient(
        to bottom,
        rgba(33, 50, 66, 0.6),
        rgb(33, 50, 66)
      ),
      url(${bgimage2});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-direction: column;

    border-bottom: 3px solid #00a2b9;
    padding-bottom: 70px;

    .wrapper {
      display: flex;
    }

    .contact {
    }

    .img-example-small {
      width: 80px;
      height: 50px;
    }
  }

  .carousel {
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

interface TextProps {
  color: string;
}

export const Location = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding-bottom: 40px;
  }

  justify-content: space-between;

  .address {
    display: flex;
    background-image: linear-gradient(to right, #f8f8f8, #fefefe);
    align-self: center;
    height: 100px;

    padding: 40px;

    align-items: center;

    gap: 60px;

    > div {
      display: flex;
      flex-direction: column;
    }

    button {
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      color: white;
      padding: 0 16px;

      border: 0;

      cursor: pointer;

      background-color: #3b3a82;

      img {
        margin-left: 8px;
      }
    }

    p {
      /* width: 100%; */
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  padding-top: 40px;

  img.env {
    width: 50px;
    margin-bottom: 20px;
  }

  @media (max-width: 1000px) {
    .infos {
      flex-direction: column;
    }
  }

  .infos {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 30px;

    .wrapper {
      img {
        margin-right: 8px;
      }
    }
  }

  .title {
    color: #00a2b9;
    font-size: 32px !important;
    text-align: center;
    font-weight: 300 !important;
    margin-bottom: 10px;
  }

  .subtitle {
    color: #fff;
    font-size: 14px !important;
    text-align: center;
    font-weight: 300 !important;
  }
  button {
    background-color: transparent;
    border: 2px solid #00a2b9;
    color: #00a2b9;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px 16px;
    cursor: pointer;

    img {
      width: 16px;
      margin-right: 6px;
    }
  }
`;

export const Inputs = styled.div`
  display: flex;
  width: 100%;

  margin-top: 35px;
  /* background-color: blue; */

  /* background-color: red; */
  gap: 20px;

  > div.left {
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
    flex: 1;
  }

  > div.right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    /* background-color: red; */
    /* background-color: blue; */
    flex: 1;

    button {
      color: #fff;
      background-color: #00a2b9;

      img {
        margin-left: 10px;
        width: 14px !important;
      }
    }
  }
`;

export const Input = styled.input`
  height: 50px;
  width: 100%;

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;

  margin-bottom: 20px;
  padding-left: 16px;
  color: #fff;

  &&::placeholder {
    color: #fff;
  }
`;

export const TextArea = styled.textarea`
  flex: 1;
  width: 100%;

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;

  padding-left: 16px;
  padding-top: 16px;
  color: #fff;

  &&::placeholder {
    color: #fff;
  }
`;

export const TextSocial = styled.span<TextProps>`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 14px;
`;
