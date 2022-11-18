import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrap>
      <p>ⓒ Copyright by 102. All rights reserved.</p>
    </Wrap>
  );
};

export default Footer;

const Wrap = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
