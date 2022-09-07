import React from "react";
import styled from "styled-components";
import { Articles } from "../containers/Articles";
import { Filter } from "../containers/Filter";
import { Sorting } from "../containers/Sorting";
import { ArticlesContextProvider } from "../context";
import { breakpoints } from "../styles/breakpoints";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Articles</h1>

      <ArticlesContextProvider>
        <Root>
          <SortingWrapper>
            <Sorting />
          </SortingWrapper>

          <ContentWrapper>
            <Filter />
            <Articles />
          </ContentWrapper>
        </Root>
      </ArticlesContextProvider>
    </div>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);

  @media ${breakpoints.size.m} {
    
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);

  @media ${breakpoints.size.m} {
    flex-direction: row;
  }

`

const SortingWrapper = styled.div`
  display: flex;
  width: 100%;


  @media ${breakpoints.size.m} {
    justify-content: flex-end;

    & > * {
      max-width: 240px;
    }
  }
`