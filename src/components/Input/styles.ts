import { COLORS } from "@/theme/colors";
import styled from "styled-components";

const Container = styled.input`
  height: 45px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #a8a8b3;
  border-radius: 4px;
  outline: 0;
  padding: 5px 15px;
  &:focus {
    border-color: ${COLORS.primary};
  }
`;

export const Styles = {
  Container,
};
