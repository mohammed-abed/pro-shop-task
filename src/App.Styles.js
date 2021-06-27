import styled from "styled-components";

export const MainContainer = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  background: #ddd;
  flex-direction: column;

  @media screen and (min-width: 1920px) {
    margin: 0 auto;
  }
`;

export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
`;
export const Text = styled("p")`
  display: flex;
  font-size: ${(props) => props.fontSize};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.weight ? "700" : "500")};
  margin-right: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  text-decoration: ${(props) => (props.decoration ? "line-through" : "none")};
  width: ${(props) => props.width};
`;
export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.color};
`;

export const BackgroundedFlexBox = styled(FlexBox)`
  background: #000;
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;
export const FlexCol = styled(FlexBox)`
  flex-direction: column;
  margin-left: ${(props) => (props.margin ? "40px" : "0")};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  margin: ${(props) => props.margin};
`;
export const InnerSection = styled(FlexColumn)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
`;

export const Image = styled("img")`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
export const Section = styled("Section")`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`;
export const HorBox = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width}%;
`;
export const VerBox = styled("div")`
  width: ${(props) => props.width}%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: ${(props) => props.height};
  margin-right: ${(props) => props.marginRight}px;
  align-items: ${(props) => (props.alignItems ? "center" : "flex-start")};

  span {
    color: #000;
    background: #fcdd06;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: -3px;
    z-index: 1;
  }
`;
export const Table = styled("table")`
  h3 {
    padding-bottom: 30px;
  }

  padding: 15px 30px 15px 30px;

  td {
    padding: 15px 30px 15px 0px;
  }

  td:first-child {
    color: #707070;
  }
`;
export const Card = styled("div")`
  background: #f2f2f2;
  margin-right: 20px;
  margin-top: 80px;
  border-radius: 8px;
  height: ${(props) => (props.height ? "auto" : "380px")};
  width: ${(props) => props.width}px;
  min-width: ${(props) => props.minwidth}px;

  hr {
    width: 100%;
    border: 1px solid #ddd;
    background: #ddd;
  }

  h3 {
    margin: 20px 15px 0 0;
  }
`;
export const InnerCard = styled(FlexRow)`
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
  margin: ${(props) => props.margin};
  /* border:2px solid blue; */
`;
