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
