import {
  Card,
  FlexCol,
  FlexRow,
  HorBox,
  Image,
  InnerCard,
  Section,
  Table,
  Text,
  VerBox,
} from "../../App.Styles";
import Button from "../../Components/Button/Button";
import Product from "../../Assets/Product.png";
import { GrayLine } from "../Gust/HomeScreen/HomeScreen.Styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfileAction, logoutAction } from "../../Redux/User/userActions";
import UpdateProfile from "./UpdateProfile";

function Profile() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);
  const fullName = state.userDetails.user.name.split(" ");
  return (
    // <Section>
    // <Card>
    <InnerCard
      style={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: "129px",
      }}
    >
      <FlexCol
        width={"500px"}
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          background: "#F2F2F2",
          borderRadius: "16px",
        }}
      >
        <FlexRow style={{ justifyContent: "flex-start" }}>
          {/* <Image
            src={photo}
            width={true}
            height={true}
            border={true}
            style={{ marginBottom: "30px" }}
          />*/}
          <h3 style={{ fontSize: "32px" }}>{state.userDetails.user.name}</h3>
        </FlexRow>
        <Text weight="500" style={{ margin: "0 0 30px 15px" }} fontSize="24px">
          My Orders
        </Text>
        {/*<Text weight="500" style={{ margin: "0 0 30px 15px" }} fontSize="24px">
          Wishlist
        </Text>
        <Text weight="500" style={{ margin: "0 0 30px 15px" }} fontSize="24px">
          Notifcations
        </Text>*/}
        <Text weight="500" style={{ margin: "0 0 30px 15px" }} fontSize="24px">
          Settings
        </Text>
        <GrayLine />
        <Text
          onClick={() => {
            dispatch(logoutAction());
            localStorage.removeItem("user");
          }}
          fontWeight={true}
          style={{ margin: "0 0 30px 15px" }}
          fontSize="24px"
        >
          {" "}
          Logout
        </Text>
      </FlexCol>

      <FlexRow
        width={"950px"}
        style={{
          justifyContent: "space-between",
          background: "#F2F2F2",
          borderRadius: "16px",
          alignItems: "flex-start",
          padding: "0 0 35px 35px",
          margin: "0 0 0 32px",
        }}
      >
        <FlexCol width={"500px"} style={{ alignItems: "flex-start" }}>
          <h3
            style={{
              marginTop: "44px",
              marginBottom: "60px",
              fontSize: "32px",
            }}
          >
            My Profile
          </h3>
          <FlexRow style={{ marginBottom: "45px" }}>
            <Text width="200px" weight="500" fontSize="24px">
              Name
            </Text>
            <Text width="200px" weight="500" fontSize="24px">
              {state.userDetails.user.name}
            </Text>
            {/* <Text weight="500" fontSize="24px">
              {fullName[0]}
            </Text>*/}
          </FlexRow>
          {/* <FlexRow style={{ marginBottom: "45px" }}>
            <Text width="200px" fontSize="24px" weight="500">
              Last Name
            </Text>
            <Text weight="500" fontSize="24px">
              {fullName[fullName.length - 1]}
            </Text>
          </FlexRow>*/}
          <FlexRow style={{ marginBottom: "45px" }}>
            <Text width="200px" fontSize="24px" weight="500">
              Email
            </Text>
            <Text weight="500" fontSize="24px">
              {state.userDetails.user.email}
            </Text>
          </FlexRow>
          {/*<FlexRow style={{ marginBottom: "45px" }}>
            <Text width="200px" fontSize="24px" weight="500">
              Birthday
            </Text>
            <Text weight="500" fontSize="24px">
              30/12/1997
            </Text>
          </FlexRow>*/}
          {/*  <FlexRow>
            <Button
              fontSize="13px"
              text="Change Password"
              width={"155px"}
              height={"35px"}
            />
          </FlexRow>*/}
        </FlexCol>
        {/*    <FlexCol
          width={"300px"}
          style={{ justifyContent: "flex-start" }}
          height={"380px"}
          marginRight={30}
        >
          <Image src={photo} />
          <Button
            fontSize="13px"
            width={"155px"}
            height={"35px"}
            margin={"30px 0"}
            text=" Upload new photo"
          />
        </FlexCol>*/}
      </FlexRow>
      <Button
        style={{ marginTop: 50 }}
        text={"Update Profile"}
        link={"/update-profile"}
        width={"220px"}
        borderRadius={6}
      />
    </InnerCard>
  );
}
/* return (
    <Section>
      <Card>
        <VerBox width={100}>
          <HorBox>
            <Image src={Product} width={true} height={true} border={true} />
            <h3>Mohammed</h3>
          </HorBox>
          <Text>My Orders</Text>
          <Text>Wishlist</Text>
          <Text>Notifications</Text>
          <Text>Settings</Text>
          <hr />
          <Text fontWeight={true}>Logout</Text>
        </VerBox>
      </Card>

      <Card width={750} height={true} minwidth={400}>
        <HorBox>
          <VerBox>
            <Table>
              <h3>My Profile</h3>
              <tr>
                <td>First Name</td>
                <td>Mohammed</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>Mohammed</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>Mohammed@gmail.com</td>
              </tr>
              <tr>
                <td>Birthday</td>
                <td>00/00/1000</td>
              </tr>
              <tr>
                <Button width={100} height={35} marginTop={true} fontSize={0.5}>
                  Change Password
                </Button>
              </tr>
            </Table>
          </VerBox>
          <VerBox alignItems={true} height={"380px"} marginRight={30}>
            <Image src={Product} />
            <Button width={70} height={35} marginTop={true} fontSize={0.5}>
              Upload new photo
            </Button>
          </VerBox>
        </HorBox>
      </Card>
    </Section>
  );
}
*/
export default Profile;
