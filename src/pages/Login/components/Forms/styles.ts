import { COLORS } from "@/theme/colors";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${COLORS.dark};
  width: 40%;
  height: 100vh;
  padding: 0px 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: #fff;

    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  span {
    font-size: 16px;
    color: #ccc;
  }

  form {
    max-width: 400px;
    height: 60%;

    input {
      margin: 5px 0px;
    }

    button {
      margin-top: 20px;
    }

    div {
      text-align: center;
      margin-top: 20px;
      a {
        color: #ccc;
        text-decoration: none;
        text-align: center;

        span {
          color: ${COLORS.primary};
        }
      }
    }
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Styles = {
  Container,
  Social,
};
