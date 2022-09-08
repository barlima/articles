import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";
import { Date, Image } from "../../atoms";

type CardType = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export const Card: React.FC<CardType> = ({
  title,
  description,
  date,
  image,
}) => {
  return (
    <Root>
      <ImageWrapper>
        <Image src={image} />
      </ImageWrapper>
      <Body>
        <Top>
          <Date>{date}</Date>
          <h3>{title}</h3>
        </Top>

        <Description>
          <p>{description}</p>
        </Description>
      </Body>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & > span {
    border-bottom: 1px solid var(--color-accent);
    margin-bottom: var(--space-s);
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-shadow);
  border-left: none;
  padding: var(--space-s) var(--space-m);
  width: 100%;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  min-width: 120px;
  width: 120px;
  min-height: 120px;

  @media ${breakpoints.size.m} {
    min-width: 200px;
    width: 200px;
    min-height: 200px;
  }
`;

const Description = styled.div`
  display: none;

  @media ${breakpoints.size.m} {
    display: block;
  }
`;
