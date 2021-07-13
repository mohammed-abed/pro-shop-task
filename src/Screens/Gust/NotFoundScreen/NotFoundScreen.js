import { Link } from "react-router-dom";
import { InnerSection, Typography } from "../../../App.Styles";

function NotFoundScreen(props) {
  return (
    <InnerSection>
      <Typography fontSize={40} fontWeight={700}>
        Page Not Found
      </Typography>

      <Link to={"/"} style={{ color: "#fcdd06", marginTop: 120 }}>
        Home Page
      </Link>
    </InnerSection>
  );
}

export default NotFoundScreen;
