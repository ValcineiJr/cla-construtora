import styled from "styled-components";

export const Container = styled.div`
  .border {
    height: 3px;
    width: 100%;
    background-color: #00a2b9;
  }

  p.title {
    text-align: center;
    font-size: 26px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.subTitle};
  }
  p.subtitle {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
  iframe {
    width: 100%;
    height: 480px;

    border: 0;
  }
  header {
    height: 450px;
    width: 100%;
    padding-top: 250px;
    margin-bottom: 30px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    color: white;

    display: flex;

    .wrapper {
      display: flex;

      width: 100%;
      max-width: 800px;

      flex: 1;

      flex-direction: column;

      /* background-color: red; */
    }
  }

  .wrapper {
    display: flex;
  }
`;

interface InfosProps {
  flex?: number;
}

export const Infos = styled.div<InfosProps>`
  display: flex;
  gap: 20px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    .label {
      font-size: 14px;
      color: #888;
    }

    input,
    textarea {
      width: 100%;
      height: 40px;

      border-radius: 5px;
      border: 1px solid #ddd;

      background-color: #f7f7f7;

      padding-left: 16px;
    }

    textarea {
      height: 80px;
      padding-top: 16px;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    flex: 1;

    /* background-color: red; */

    .wrapper {
      gap: 20px;
    }

    button {
      margin-left: auto;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;

      color: white;
      padding: 0 16px;

      border: 0;

      cursor: pointer;

      background-color: #3b3a82;
    }
  }
  .left {
    flex: 1;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    padding: 50px;

    .title {
      color: #00a2b9;
      font-size: 22px;
      margin-bottom: 20px;
    }

    .row {
      display: flex;
      flex-direction: column;
      padding-bottom: 20px;
      font-size: 14px;

      .subtitle {
        color: #00a2b9;
      }
      .value {
        color: #888;
      }
    }
  }
`;
