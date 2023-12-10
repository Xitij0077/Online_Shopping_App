// import { styled } from "styled-components";
// import Navbar from "../components/Navbar";
// import Announcement from "./../components/Announcement";
// import Footer from "../components/Footer";
// import { Remove, Add } from "@material-ui/icons";
// import { mobile } from "../responsive";

// const Container = styled.div``;

// const Wrapper = styled.div`
//   padding: 20px;
//   ${mobile({ padding: "10px" })}
// `;
// const Title = styled.h1`
//   font-weigth: 300;
//   text-align: center;
// `;
// const Top = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
// `;

// const TopButton = styled.button`
//   padding: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   border: ${(props) => props.type === "filled" && "none"};
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"};
//   color: ${(props) => props.type === "filled" && "white"};
// `;
// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;
// const Info = styled.div`
//   flex: 3;
// `;

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;
// const ProductDetail = styled.div`
//   flex: 2;
//   display: flex;
// `;
// const Image = styled.img`
//   width: 200px;
// `;
// const Details = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
// `;
// const ProductName = styled.span``;
// const ProductId = styled.span``;
// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;
// const ProductSize = styled.span``;
// const PriceDetail = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// const ProductAmountContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;
// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;
// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const Summary = styled.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;
// const SummaryTitle = styled.h1`
//   font-weight: 200;
// `;
// const SummaryItem = styled.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   font-weight: ${(props) => props.type === "total" && "500"};
//   font-size: ${(props) => props.type === "total" && "24px"};
// `;
// const SummaryItemText = styled.div``;
// const SummaryItemPrice = styled.div``;
// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;

// const Cart = () => {
//   return (
//     <Container>
//       <Navbar />
//       <Announcement />
//       <Wrapper>
//         <Title>YOUR BAG</Title>
//         <Top>
//           <TopButton>CONTINUE SHOPPING</TopButton>
//           <TopTexts>
//             <TopText>Shopping Bag(2)</TopText>
//             <TopText>Your Wishlist(0)</TopText>
//           </TopTexts>
//           <TopButton type="filled">CHECKOUT NOW</TopButton>
//         </Top>
//         <Bottom>
//           <Info>
//             <Product>
//               <ProductDetail>
//                 <Image src="Insert Image from Google" />
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b>JESSIE THUNDER SHOES
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b>6658972659
//                   </ProductId>
//                   <ProductColor color="black" />
//                   <ProductSize>
//                     <b>Size:</b>L
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>2</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>$30</ProductPrice>
//               </PriceDetail>
//             </Product>
//             <Hr />
//             <Product>
//               <ProductDetail>
//                 <Image src="Insert Image from Google" />
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b>HAKURA T-SHIRT
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b>6658972777
//                   </ProductId>
//                   <ProductColor color="gray" />
//                   <ProductSize>
//                     <b>Size:</b>M
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>2</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>
//                   <b>Price:</b>$20
//                 </ProductPrice>
//               </PriceDetail>
//             </Product>
//           </Info>
//           <Summary>
//             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//             <SummaryItem>
//               <SummaryItemText>Sub-Total</SummaryItemText>
//               <SummaryItemPrice>$80</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Estimated Shipping</SummaryItemText>
//               <SummaryItemPrice>$5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Shipping Discount</SummaryItemText>
//               <SummaryItemPrice>$-5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem type="total">
//               <SummaryItemText>Total</SummaryItemText>
//               <SummaryItemPrice>$80</SummaryItemPrice>
//             </SummaryItem>
//             <Button>CHECKOUT NOW</Button>
//           </Summary>
//         </Bottom>
//       </Wrapper>
//       <Footer />
//     </Container>
//   );
// };

// export default Cart;
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "./../components/Announcement";
import Footer from "../components/Footer";
import { Remove, Add } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-size: 28px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  font-size: 14px;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 14px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 150px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

const ProductName = styled.span`
  font-size: 16px;
`;

const ProductId = styled.span`
  font-size: 14px;
  margin-top: 10px;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-top: 10px;
`;

const ProductSize = styled.span`
  font-size: 16px;
  margin-top: 10px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductAmount = styled.div`
  font-size: 18px; /* Adjusted font size */
  margin: 8px;
  ${mobile({ margin: "5px 15px" })}
`;

const StyledAdd = styled(Add)`
  font-size: 17px !important; /* Add !important to override any conflicting styles */
  cursor: pointer; /* Add cursor pointer for interactivity */
`;

const StyledRemove = styled(Remove)`
  font-size: 17px !important; /* Add !important to override any conflicting styles */
  cursor: pointer; /* Add cursor pointer for interactivity */
`;

const ProductPrice = styled.div`
  font-size: 24px; /* Adjusted font size */
  font-weight: 200; /* Adjusted font weight */
  margin-top: 10px ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 15px; /* Adjusted padding */
  height: 50vh; /* Adjusted height */
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
  font-size: 20px; /* Adjusted font size */
  margin-bottom: 30px; /* Adjusted margin */
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  line-spacing: 3px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) =>
    props.type === "total" && "18px"}; /* Adjusted font size */
  margin-bottom: ${(props) => props.type === "total" && "10px"};
`;

const SummaryItemText = styled.div``;

const SummaryItemPrice = styled.div``;

const Button = styled.button`
  ${
    "" /* width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 16px; */
  }

  width: 100%;
  padding: 10px 5px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 16px; /* Your desired font size */
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="/slide/slide-5.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>6658972659
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <StyledAdd />
                  <ProductAmount>2</ProductAmount>
                  <StyledRemove />
                </ProductAmountContainer>
                <ProductPrice>
                  <b style={{ fontSize: "18px", fontWeight: "500" }}>Price:-</b>{" "}
                  $30
                </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="/slide/slide-6.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>HAKURA T-SHIRT
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>6658972777
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <StyledAdd />
                  <ProductAmount>2</ProductAmount>
                  <StyledRemove />
                </ProductAmountContainer>
                <ProductPrice>
                  <b style={{ fontSize: "18px", fontWeight: "500" }}>Price:-</b>{" "}
                  $20
                </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Sub-Total</SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$-5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText style={{ fontSize: "18px", fontWeight: "600" }}>
                TOTAL
              </SummaryItemText>
              <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
