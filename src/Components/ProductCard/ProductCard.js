import { FlexBox, FlexRow, Image, Text } from "../../App.Styles";
import Button from "../../Components/Button/Button";
import { CardContainer } from "./ProductCard.Styles.js";
function ProductCard({
  img,
  text,
  margin,
  height,
  star,
  emptyStar,
  value,
  price,
  Discount,
  newPrice,
  addBtn,
  imgHeight,
}) {
  return (
    <CardContainer margin={margin} height={height}>
      <FlexBox height={imgHeight}>
        <Image src={img} />
      </FlexBox>
      <Text fontSize={"23px"} marginTop={"20px"}>
        {text}
      </Text>
      {value ? (
        <FlexRow marginTop={"20px"}>
          {star}
          {star}
          {star}
          {star}
          {emptyStar}
        </FlexRow>
      ) : (
        <FlexRow marginTop={"20px"}>
          {emptyStar}
          {star}
          {star}
          {star}
          {star}
        </FlexRow>
      )}
      {Discount ? (
        <FlexRow marginTop={"15px"}>
          <Text weight={true} color={"#FC4059"} margin={"15px"}>
            {newPrice}
          </Text>
          <Text weight={true} decoration={true} color={"#242424"}>
            {price}
          </Text>
        </FlexRow>
      ) : (
        <FlexRow marginTop={"15px"}>
          <Text weight={true} color={"#242424"}>
            {price}
          </Text>
        </FlexRow>
      )}
      <FlexRow marginTop={"20px"}>
        <Button
          text={addBtn}
          width={"54px"}
          borderRadius={10}
          isGray={true}
          style={{ height: 62, marginRight: 13 }}
        />
        <Button
          text="Add to cart"
          width={"324px"}
          borderRadius={10}
          style={{ height: 62 }}
          isGray={true}
        />
      </FlexRow>
    </CardContainer>
  );
}
export default ProductCard;
/*function ProductCard(props){
    return(
        <CardContainer>

        </CardContainer>
    )
}*/
