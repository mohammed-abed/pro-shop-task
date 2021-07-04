import styled from "styled-components";
import { FlexColumn } from "../../App.Styles";
import { Link } from "react-router-dom";

export const CardContainer = styled(FlexColumn)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #fff;
  width: ${(props) => (props.width ? props.width : "520px")};
  height: ${(props) => props.height};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 16)}px;
  font-size: 24px;
  margin: ${(props) => (props.margin ? "0 43px" : "0")};
`;
/*export const PriceContainer = styled("div")`
  height: 80px;
  width: 80px;
  background: #fc4059;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
 
`;*/
export const CardLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #242424;
`;
export const CardImage = styled("img")`
  max-width: 513px;
  max-height: 342px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 34px;
`;
