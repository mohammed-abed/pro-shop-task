import styled from "styled-components";
import { FlexCol, FlexRow, InnerSection, Image } from "../../App.Styles";
import { Field } from "formik";

export const LoginRow = styled(FlexRow)`
  margin: 44px 0 78px 0;
  align-items: flex-start;
  justify-content: flex-start;
`;
export const LoginCol = styled(FlexCol)`
  width: 500px;
  background: #fff;
  align-items: flex-start;
`;
export const LoginColSmall = styled(FlexCol)`
  width: 400px;
`;

export const LoginContainer = styled(InnerSection)`
  display: flex;
  justify-content: start;
  align-items: start;
  background: #fff;
  opacity: 1;
  width: 100%;
  margin-bottom: 30px;
`;
export const LoginTitle = styled("h1")`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 16px;
`;
export const Input = styled("input")`
  height: 40px;
  width: 400px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 15px 11px;
  margin-bottom: 30px;
  font-size: 15px;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: ${(props) => props.size};
    color: #000;
    font-weight: 700;
    color: #70707070;
  }
`;

export const LoginImg = styled(Image)`
  width: 800px;
  margin: 0 0 0 180px;
`;
export const SignUpImg = styled(Image)`
  width: 1170px;
  margin: 0 0 0 26px;
`;
export const FormInput = styled(Field)`
  height: 40px;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  padding: 15px 11px;
  margin-bottom: 30px;
  font-size: 15px;
`;
export const ErrorMsg = styled("span")`
  color: red;
  width: 100%;
`;
