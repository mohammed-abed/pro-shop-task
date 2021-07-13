import styled from "styled-components";
import { InnerSection } from "../../App.Styles";

export const OrderContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;
export const Input = styled("input")`
  height: 40px;
  width: 100%;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  border: 1px solid #707070;
  padding: 12px 18px;
  margin-bottom: ${(props) => (props.marginB ? props.marginB : "41px")};
  font-weight: 700;
  color: #707070;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 15px;
    color: #000;
    font-weight: 700;
  }
`;
