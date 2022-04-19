import styled from "styled-components";

export const Container = styled.div`
  header {
    height: 600px;
    width: 100%;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Main = styled.main`
  padding-top: 30px;
  text-align: center;

  span {
    color: #09393a;
    font-weight: bold;
    font-size: 12px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 40px;

    margin-top: 10px;

    font-weight: 300;
  }
`;

export const Informations = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .boxInformation {
    @media (max-width: 1000px) {
      img {
        display: none !important;
      }

      padding: 16px;
    }
    background-color: #fff;
    display: flex;

    /* flex: 1; */
    position: relative;

    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 20px 0;
    padding-right: 40px;
    padding-left: 180px;

    margin-top: 40px;

    img {
      height: 180px;
      bottom: 0;
      left: 30px;
      position: absolute;
    }

    .infoWrapper {
      display: flex;
      flex-direction: column;

      p {
        font-size: 14px;
        text-align: left;
      }

      button {
        margin-top: 20px;
        margin-right: auto;
        padding: 6px 18px;
        color: ${({ theme }) => theme.colors.secondaryText};
        border-radius: 16px;
        border: 0;
        cursor: pointer;
        font-size: 12px;
      }
    }
  }

  .boxSecondInformation {
    display: flex;
    margin-top: 90px;
    flex: 2;

    height: 400px;

    position: relative;

    > div {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    span.title {
      font-size: 60px;
      color: ${({ theme }) => theme.colors.secondaryText};
    }
    span.subtitle {
      font-size: 36px;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.secondaryText};
      line-height: 35px;
      margin-bottom: 20px;
    }

    p.title {
      font-weight: bold;
      font-size: 12px;
      width: 300px;
      line-height: 18px;

      margin-bottom: 15px;
    }

    p.subtitle {
      font-size: 12px;
      width: 300px;
      line-height: 18px;
      color: #888;

      margin-bottom: 15px;
    }

    .link {
      display: flex;
      align-items: center;
    }

    .link > a {
      color: #7a7a7a;
      font-size: 12px;
      font-weight: bold;
    }

    .link span {
      color: #cecece;
      font-size: 18px;

      margin-left: 10px;
    }

    @media (max-width: 600px) {
      aside {
        display: none;
      }
    }
    @media (max-width: 1000px) {
      aside {
        height: 300px !important;
      }
    }

    aside {
      width: 100%;
      height: 500px;

      margin-left: 40px;

      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }

  .container {
    display: flex;
    height: 200px;
    flex: 1;
    background-color: #fff;
    padding-top: 50px;
    padding-right: 120px;

    z-index: 2;

    .content {
      display: flex;
      justify-content: flex-end;
      background-color: #e5e5e5;
      flex: 1;
      position: relative;
      padding-right: 220px;
      align-items: center;

      .infos {
        display: flex;
        flex-direction: column;

        text-align: left;

        .title {
          font-weight: 300;
          font-size: 26px;
        }

        .subtitle {
          color: ${({ theme }) => theme.colors.secondaryText};
          font-size: 26px;
        }
      }

      .number {
        margin-left: 55px;
      }

      button {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        display: flex;
        align-items: center;
        height: 50px;

        right: -80px;

        padding: 0 30px;

        border: 0;

        background-color: ${({ theme }) => theme.colors.secondaryText};
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      }

      button > span {
        color: #fff;

        margin-left: 10px;

        border-radius: 5px;
      }
    }
  }

  .firstRow {
    display: flex;
  }
  .secondRow {
    display: flex;
  }
  .thirdRow {
    display: flex;
  }

  @media (max-width: 1000px) {
    .thirdRow {
      display: none;
    }
  }
`;

interface EmptyProps {
  value: number;
}

export const EmptySpace = styled.div<EmptyProps>`
  flex: 0 0 ${({ value }) => value}%;
`;

export const ThirdRow = styled.div`
  /* display: none; */
  @media (min-width: 1000px) {
    display: none;
  }
  padding: 20px 0;

  .number {
    margin: 20px 0;
  }

  .infos {
    display: flex;
    flex-direction: column;
    text-align: center;

    .title {
      font-weight: 300;
      font-size: 26px;
    }

    .subtitle {
      color: ${({ theme }) => theme.colors.secondaryText};
      font-size: 26px;
    }
  }

  display: flex;
  background-color: #e5e5e5;
  flex: 1;
  flex-direction: column;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    height: 50px;

    padding: 0 30px;

    border: 0;

    background-color: ${({ theme }) => theme.colors.secondaryText};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  button > span {
    color: #fff;

    margin-left: 10px;

    border-radius: 5px;
  }
`;