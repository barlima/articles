import React from "react";
import styled from "styled-components";

type ErrorLayoutProps = {
  title: string;
  message: string;
};

export const ErrorLayout: React.FC<ErrorLayoutProps> = ({ title, message }) => {
  return (
    <Root>
      <Title>{title}</Title>

      <Message>{message}</Message>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 100px;
  line-height: 100px;
  border-bottom: 1px solid var(--color-accent);
  margin-bottom: var(--space-m);
`;

const Message = styled.div`
  font-weight: 700;
`;
