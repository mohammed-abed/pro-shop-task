import { CustomButton } from "./Button.Styles";

const Button = ({
  text,
  onClick = () => {},
  isGray,
  width,
  borderRadius,
  style = {},
  link = "",
  isLoading,
}) => {
  return (
    <CustomButton
      to={link}
      as={link ? "" : "button"}
      onClick={onClick}
      isGray={isGray}
      width={width}
      borderRadius={borderRadius}
      style={style}
    >
      {text}
    </CustomButton>
  );
};

export default Button;
