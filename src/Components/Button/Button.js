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
  disabled,
}) => {
  return (
    <CustomButton
      to={link}
      as={link ? "" : "button"}
      disabled={isLoading}
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
