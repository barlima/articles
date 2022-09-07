import React from "react";
import styled from "styled-components";
import { Articles } from "../containers/Articles";
import { Filter } from "../containers/Filter";
import { Sorting } from "../containers/Sorting";
import { ArticlesContextProvider } from "../context";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Articles</h1>

      <Root>
        <ArticlesContextProvider>
          <Sorting />
          <Filter />
          <Articles />
        </ArticlesContextProvider>
      </Root>
    </div>
  );
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
