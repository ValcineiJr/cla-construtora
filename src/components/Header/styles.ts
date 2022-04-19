import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    display: none;
  }

  position: absolute;

  left: 0;
  right: 0;

  .wrapper {
    display: flex;
    flex: 1;
    /* background-color: red; */
  }

  padding-top: 30px;

  /* background-color: red; */

  .menu {
    display: flex;
    flex-direction: column;

    margin-left: auto;

    /* background-color: green; */

    .rowOne {
      margin-left: auto;

      display: flex;
      padding: 20px;
      padding-top: 0;
      padding-right: 0;

      ul > li {
        display: flex;
        align-items: center;
      }

      ul > li > span {
        color: ${({ theme }) => theme.colors.secondaryText};
        margin-left: 5px;

        font-size: 14px;
      }
    }

    .rowTwo {
      display: flex;

      /* background-color: yellow; */

      margin-left: auto;
      margin-top: auto;

      align-items: flex-end;

      height: 50px;

      /* background-color: green; */

      ul {
        gap: 20px;
      }

      ul > li {
        display: flex;
        align-items: center;
      }

      ul > li > a {
        color: ${({ theme }) => theme.colors.primaryText};
        text-decoration: none;
        text-transform: uppercase;

        font-size: 15px;

        flex: 1;

        /* background-color: green; */
      }

      .iconBox {
        width: 24px;
        height: 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 5px;

        border: 1px solid ${({ theme }) => theme.colors.secondaryText};
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
  }
`;

export const MobileHeader = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }

  .wrapper {
    position: fixed;
    top: 0;
    /*left: -100%;*/
    right: -100%;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 3;

    /* background: linear-gradient(90deg, #f92c78, #4114a1); */
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%);*/
    transition: all 0.6s ease-in-out;
  }
  #active:checked ~ .wrapper {
    /*left: 0;*/
    right: 0;
  }
  .menu-btn {
    position: absolute;
    z-index: 4;
    right: 20px;
    /*left: 20px; */
    top: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    /*color: #fff;*/
    /*background: linear-gradient(90deg, #f92c78, #4114a1);*/
    /* background: linear-gradient(375deg, #1cc7d0, #2ede98); */
    /* background: linear-gradient(-45deg, #e3eefe 0%, #efddfb 100%); */
    transition: all 0.3s ease-in-out;
  }
  .menu-btn span,
  .menu-btn:before,
  .menu-btn:after {
    content: "";
    position: absolute;
    top: calc(50% - 1px);
    left: 30%;
    width: 40%;
    border-bottom: 2px solid #fff;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .menu-btn:before {
    transform: translateY(-8px);
  }
  .menu-btn:after {
    transform: translateY(8px);
  }

  .close {
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transition: background 0.6s;
  }

  /* closing animation */
  #active:checked + .menu-btn span {
    transform: scaleX(0);
  }
  #active:checked + .menu-btn:before {
    transform: rotate(45deg);
    border-color: #fff;
  }
  #active:checked + .menu-btn:after {
    transform: rotate(-45deg);
    border-color: #fff;
  }
  .wrapper ul {
    /* position: absolute;
    top: 60%;
    left: 50%;
    height: 90%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center; */

    /* background: red; */
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;
  }
  .wrapper ul li {
    height: 10%;
  }
  .wrapper ul li a {
    text-decoration: none;
    font-size: 30px;
    font-weight: 500;
    /* padding: 5px 30px; */
    color: #fff;
    border-radius: 50px;
    /* position: absolute; */
    line-height: 50px;

    opacity: 0;
    transition: all 0.3s ease;
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .wrapper ul li a:hover:after {
    transform: scaleY(1);
  }
  .wrapper ul li a:hover {
    color: #1a73e8;
  }
  input[type="checkbox"] {
    display: none;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    text-align: center;
    width: 100%;
    color: #202020;
  }
  .content .title {
    font-size: 40px;
    font-weight: 700;
  }
  .content p {
    font-size: 35px;
    font-weight: 600;
  }

  #active:checked ~ .wrapper ul li a {
    opacity: 1;
  }
  .wrapper ul li a {
    transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translateX(100px);
  }
  #active:checked ~ .wrapper ul li a {
    transform: none;
    transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1); /* easeOutBackを緩めた感じ */
    transition-delay: 0.6s;
    transform: translateX(-100px);
  }
`;

export const Logo = styled.div`
  height: 100px;
  width: 100px;

  background-color: #fff;
`;
