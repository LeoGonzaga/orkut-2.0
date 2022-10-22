import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  background: #ad5389; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3c1053,
    #ad5389
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3c1053,
    #ad5389
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 60%;
  object-fit: cover;
  overflow: hidden;
  img {
    width: 70vw;
    z-index: -1px;
    position: fixed;
    top: 0px;
    left: -120px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-left: 100px;
  padding-top: 20%;
  h1 {
    font-size: 60px;
    font-weight: bold;
    color: #fff;
  }

  p {
    color: #fff;
    line-height: 25px;
  }
`;

const Logo = styled.div`
  img {
    margin-top: 20px;
  }
`;

export const Styles = {
  Container,
  LeftColumn,
  Content,
  Logo,
};
