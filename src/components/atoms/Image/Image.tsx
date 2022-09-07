import React, { ImgHTMLAttributes } from "react";
import styled from "styled-components";

type ImageProps = React.HTMLProps<HTMLImageElement>;

export const Image: React.FC<ImageProps> = ({
  crossOrigin,
  ref,
  as,
  ...props
}) => {
  return (
    <Root>
      <Img {...props} />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-shadow);
    z-index: -1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
