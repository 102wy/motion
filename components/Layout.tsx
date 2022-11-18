import { Props } from "next/script";
import React from "react";
import styled from "styled-components";

const Layout = ({ children }: Props) => {
  return <Wrap>{children}</Wrap>;
};

export default Layout;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
