import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  background-color:#f5feff;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px " })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 10rem;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  ${
    "" /* border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px; */
  }
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Input = styled.input`
  ${
    "" /* border: none;

  ${mobile({ width: "50px" })} */
  }
  border: none;
  padding: 8px;
  font-size: 14px;
  outline: none;
  width: 250px;
  transition: width 0.3s ease-in-out;

  ${mobile({ width: "50px" })}

  ${
    "" /* &:focus {
    width: 250px; /* Adjust the width as needed */
  } */}
`;

const SearchIcon = styled(Search)`
  color: gray;
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  ${"" /* text-align: center; */}
`;

const Logo = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14 px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>VogueVault.</Logo>
        </Center>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />{" "}
            <SearchIcon style={{ fontSize: 16 }} />
          </SearchContainer>
        </Left>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
