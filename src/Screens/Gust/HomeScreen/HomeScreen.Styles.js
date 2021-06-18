import styled from "styled-components";
import { FlexBox, FlexColumn, FlexRow } from "../../../App.Styles";

export const HeroBox = styled(FlexRow)`
  justify-content: space-between;
  height: 590px;
`;

export const SideBox = styled(FlexColumn)`
  width: 40%;
  align-items: start;
  height: 100%;
`;

export const HeroTitle = styled("h1")`
  font-size: 60px;
  letter-spacing: 2.4px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
`;

export const Image = styled("img")`
  //  object-fit: contain;
  //  border-radius:16px;
  //  width:610px;
  // height:auto;
  object-fit: contain;
  border-radius: 10px;
  height: 580px;
  width: 610px;
`;
export const Dot = styled("div")`
  width: 25px;
  height: 25px;
  background: ${(props) => (props.isGray ? "#70707030" : "yellow")};
  border-radius: 50%;
  margin: 0 10.5px;
  cursor: pointer;
`;

export const Arrow = styled(FlexBox)`
  font-size: 35px;
  margin: 0 23px;
  color: #000;
  width: 30px;
  font-weight: 700;
  cursor: pointer;
  ${(props) => (props.isLeft ? "transform: rotate(-180deg);" : "")}
`;
export const SectionBox = styled(HeroBox)`
  align-items: center;
  height: auto;
`;
export const GrayLine = styled("hr")`
  width: 100%;
  height: 1px;
  background-color: #707070;
  opacity: 0.3;
  margin-bottom: 45px;
`;
export const YellowLine = styled("hr")`
  width: 200px;
  height: 7px;
  background-color: #fcdd06;
  position: relative;
`;
export const VirtecalLine = styled("hr")`
  height: 588px;
  width: 1px;
  background-color: #707070;
  opacity: 0.3;
  margin: ${(props) => (props.margin ? "0 21.5px" : "0")};
`;
