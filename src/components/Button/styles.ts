import { COLORS } from "@/theme/colors";
import styled from "styled-components";

const Container = styled.button`
  background-color: ${COLORS.primary};
  height: 55px;
  width: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  border: none;
  transition: 0.2s ease all;

  &:hover {
    filter: brightness(0.5);
  }
`;

export const Styles = {
  Container,
};
