import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  max-width: 1024px;
  margin: var(--space-l) auto ;
`;
