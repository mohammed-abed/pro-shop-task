import { Card, HorBox, Section, Table, Text, VerBox } from "../../App.Styles";
import Button from "../../Components/Button/Button";

function Profile() {
  return (
    <Section>
      <Card>
        <VerBox width={100}>
          <HorBox>
            <Image src={photo} width={true} height={true} border={true} />
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
          <DivCol alignItems={true} height={"380px"} marginRight={30}>
            <Image src={} />
            <Button width={70} height={35} marginTop={true} fontSize={0.5}>
              Upload new photo
            </Button>
          </DivCol>
        </HorBox>
      </Card>
    </Section>
  );
}
