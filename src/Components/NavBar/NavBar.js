import {
  Icon,
  Logo,
  NavBox,
  NavContainer,
  NavInnerSection,
  SearchButton,
  SearchInput,
  StyledSearchIcon,
} from "./NavBar.Styles";
import logo from "../../Assets/Screenshot 2021-06-14 110717.png";
import { useState } from "react";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/User/UserActions";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Text } from "../../App.Styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const Style = {
    fontSize: 25,
    color: "#FFF",
    fill: "#FFF",
    margin: "auto 0 10px 0",
  };
  /* const StyleObj = {
    fontSize: 20,
    color: "#FFF",
    fill: "#FFF",
    margin: "auto 0 auto 32px",
  };*/

  const state = useSelector((state) => state);
  const [value, setValue] = useState("");
  return (
    <NavContainer>
      <NavInnerSection>
        <NavBox>
          {/*<Link to={"/"}>
            <Logo src={logo} alt="Logo" />
          </Link>*/}
          <Logo src={logo} alt="Logo" />

          {/* <StyledLink to={"/"}>
            <Logo src={logo} alt="Logo" />
          </StyledLink>*/}
        </NavBox>
        <NavBox style={{ background: "#FFF", borderRadius: 6 }}>
          <SearchInput
            value={value}
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <SearchButton>
            <StyledSearchIcon />
            Search
          </SearchButton>
        </NavBox>
        <NavBox>
          {/*<PersonIcon to={state.userDetails.user._id ? "/" : "/login" style={StyleObj} />*/}
          <Link to={"/login"}>
            <login />
            <Text fontSize={"13px"} color={"#fff"}>
              Login / Sign up
            </Text>
          </Link>
          {/* <Icon to={"/login"}>
            <PersonIcon style={Style} />
          {state.userDetails.user._id ? (
            <Text fontSize={"13px"} color={"#fff"}>
              Profile
            </Text>
          ) : (
            <Text fontSize={"13px"} color={"#fff"}>
              Login / Sign up
            </Text>
          )}*/}
          {/*</Icon>*/}
          {/*<BookmarkIcon style={StyleObj} />*/}
          <Icon to={"/product"}>
            <span>0</span>
            <BookmarkIcon style={Style} />
            <Text fontSize={"13px"} color={"#fff"}>
              Wishlist
            </Text>
          </Icon>

          {/*<ShoppingCartIcon style={StyleObj} />*/}
          <Icon>
            <span>0</span>
            <ShoppingCartIcon style={Style} />
            <Text fontSize={"13px"} color={"#fff"}>
              Cart
            </Text>
          </Icon>
          {state.userDetails.user._id && (
            <Icon
              onClick={() => {
                dispatch(logoutAction(null));
                localStorage.removeItem("user");
              }}
            >
              <ExitToAppIcon style={Style} />
              <Text fontSize={"13px"} color={"#fff"}>
                Logout
              </Text>
            </Icon>
          )}
        </NavBox>
      </NavInnerSection>
    </NavContainer>
  );
};

export default NavBar;
