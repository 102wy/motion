import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Header = () => {
  const router = useRouter();
  return (
    <Wrap>
      <Logo onClick={() => router.push("/")}>MOTION</Logo>
      <Navigation />
    </Wrap>
  );
};

export default Header;

const Wrap = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.h1`
  font-family: "bitbit";
  font-size: 50px;
  color: ${(props) => props.theme.primary};
  padding: 20px 0;
  cursor: pointer;
`;
