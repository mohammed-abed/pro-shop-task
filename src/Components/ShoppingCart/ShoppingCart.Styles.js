import styled from "styled-components";
import { InnerSection } from "../../App.Styles.js";

export const CartContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;
export const Span = styled("span")`
  color: ${(props) => props.color};
`;
export const addIcon = styled("span")`
  width: 48px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    border: 1px solid #fcdd06;
  }
`;
