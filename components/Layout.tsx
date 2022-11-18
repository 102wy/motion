import { Props } from "next/script";
import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: Props) => {
  return (
    <Wrap>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  height: 100%;
  ::-webkit-scrollbar {
    background-color: ${(props) => props.theme.primary};
    width: 6px;
  }
`;
