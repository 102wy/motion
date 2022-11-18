import Image, { ImageProps } from "next/image";
import React from "react";
import styled from "styled-components";

const AutoImg = ({ ...props }: ImageProps): React.ReactElement => {
  return (
    <Wrap>
      <Image layout="fill" {...props} />
    </Wrap>
  );
};

export default AutoImg;

const Wrap = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
    img {
      height: auto !important;
      position: relative !important;
    }
  }
`;
