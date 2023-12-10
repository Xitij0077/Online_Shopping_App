import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 85%;
  height: 70vh;

  object-fit: contain;
  margin-left: 2rem;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 295;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 350;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  ${"" /* margin-top: 10px; */}
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  ${"" /* margin-top: 10px; */}
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  ${"" /* margin: 0px 5px; */}
  ${"" /* align-items: center; */}
  ${"" /* justify-content: space-between; */}
  ${mobile({ width: "100%" })}
`;

const StyledAdd = styled(Add)`
  font-size: 18px !important; /* Add !important to override any conflicting styles */
  cursor: pointer; /* Add cursor pointer for interactivity */
`;

const StyledRemove = styled(Remove)`
  font-size: 18px !important; /* Add !important to override any conflicting styles */
  cursor: pointer; /* Add cursor pointer for interactivity */
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: black;

  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="/categories/product-3.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jeans</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            dolores illum iste vero suscipit sapiente porro recusandae soluta
            maxime? Recusandae quaerat reprehenderit quidem aliquam excepturi ex
            suscipit voluptate aspernatur eligendi?
          </Desc>
          <Price style={{ fontWeight: "200" }}>
            {" "}
            <b style={{ fontSize: "20px", fontWeight: "200" }}>Price:</b> $20
          </Price>
          <FilterContainer>
            <Filter style={{ marginBottom: "20px" }}>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
              <FilterColor color="Blue" />
              <FilterColor color="Gray" />
              <FilterColor color="Yellow" />
              <FilterColor color="Red" />
              <FilterColor color="Pink" />
              <FilterColor color="Maroon" />
            </Filter>

            <Filter>
              <FilterTitle>Size </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer style={{ marginBottom: "2.5rem" }}>
              <StyledRemove />
              <Amount>1</Amount>
              <StyledAdd />
            </AmountContainer>
            <Button style={{ color: "white", fontSize: "0.90rem" }}>
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
