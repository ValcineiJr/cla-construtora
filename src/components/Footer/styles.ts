import styled from "styled-components";

export const Container = styled.footer`
  @media (max-width: 1000px) {
    display: none;
  }

  background-color: #1f1f1f;
  flex: 1;
  display: flex;

  padding-bottom: 30px;

  align-items: center;
  flex-direction: column;

  padding-top: 50px;

  .firstRow {
    display: flex;

    align-items: center;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
    }

    ul > li {
      display: flex;
      align-items: center;
    }

    ul > li > span {
      color: #fff;
      font-size: 12px;

      margin-left: 8px;
    }

    .location {
      display: flex;
      align-items: flex-start;

      span {
        color: #fff;
        font-size: 12px;
        margin-left: 8px;
      }
    }
  }

  .secondRow {
    margin-top: 50px;

    ul {
      display: flex;
      list-style: none;
    }

    ul > li > a {
      color: ${({ theme }) => theme.colors.primaryText};
      text-decoration: none;
      text-transform: uppercase;
      padding: 0 20px;

      font-size: 15px;
    }
  }

  .thirdRow {
    display: flex;
    justify-content: center;
    width: 100%;

    margin-top: 40px;

    .iconBox {
      width: 24px;
      height: 24px;

      margin-right: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 5px;

      border: 1px solid #888;
    }
  }
`;

export const FooterMobile = styled.footer`
  @media (min-width: 1000px) {
    display: none;
  }

  background-color: #1f1f1f;
  flex: 1;
  display: flex;

  .location {
    display: flex;
    justify-content: center;

    span {
      color: #fff;
      font-size: 12px;
      margin-left: 8px;
    }
  }

  .thirdRow {
    display: flex;
    justify-content: center;
    width: 100%;

    margin-top: 20px;

    .iconBox {
      width: 24px;
      height: 24px;

      margin-right: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 5px;

      border: 1px solid #888;
    }
  }

  .footer {
    padding: 20px 0;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;
