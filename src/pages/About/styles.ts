import styled from "styled-components";
import bgimage from "../../assets/img/build3.jpg";

export const Container = styled.main`
  header {
    height: 450px;
    width: 100%;
    padding-top: 250px;

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

  .content {
    display: flex;

    margin-top: 80px;

    aside {
      display: flex;
      flex: 1;
      text-align: left;

      h2 {
        color: ${({ theme }) => theme.colors.secondaryText};
        font-weight: 300;
        font-size: 42px;
      }

      h1 {
        color: ${({ theme }) => theme.colors.secondaryText};
        font-weight: 700;
        font-size: 42px;

        line-height: 30px;
        margin-bottom: 16px;
      }

      .bold {
        margin-bottom: 16px;
        color: #000;
        font-weight: bold;
        font-size: 14px;

        line-height: 24px;
      }

      .normal {
        margin-bottom: 18px;
        font-weight: 300;
        line-height: 24px;
        font-size: 14px;
      }

      /* background-color: red; */
    }

    .first-child {
      width: 100%;
      max-width: 450px;
    }
  }

  @media (max-width: 1000px) {
    .content .banner {
      display: none;
    }
  }

  .content .banner {
    width: 100%;
    height: 450px;

    margin-left: 40px;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .container {
    display: flex;

    .greenContainer {
      display: flex;
      flex-direction: column;
      flex: 1;
      background-color: #15aabf;
      padding: 50px;
      color: white;

      border-bottom: 3px solid #259fa1;

      margin-bottom: 80px;
      margin-top: 80px;

      background-image: linear-gradient(
          to bottom,
          rgba(21, 170, 191, 0.86),
          rgb(21, 170, 191)
        ),
        url(${bgimage});
      background-size: cover;
      background-repeat: no-repeat;

      @media (max-width: 1000px) {
        .row {
          flex-direction: column;
        }
      }

      .row {
        display: flex;
        gap: 20px;

        margin-bottom: 30px;

        .wrapper {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
      }

      .title {
        font-size: 26px;
        font-weight: bold;

        margin-bottom: 8px;
      }

      .subTitle {
        font-weight: 300;

        font-size: 14px;
        line-height: 24px;
      }
    }
  }
`;

export const SubTitle = styled.span`
  font-size: 14px;
  color: #d7d8da;

  span {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  display: flex;
  color: white;
  gap: 10px;
  font-weight: 300;

  line-height: 60px;

  p {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-weight: 500;
  }
`;
