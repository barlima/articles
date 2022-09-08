import React from "react";
import styled from "styled-components";

type InfoProps = {
  message: string;
};

export const Info: React.FC<InfoProps> = ({ message }) => {
  return <Root>{message}</Root>;
};

const Root = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  padding: var(--space-l);
  background-color: var(--color-shadow);
`;
