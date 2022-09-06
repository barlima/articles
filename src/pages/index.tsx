import React from "react";
import styled from "styled-components";
import { Articles } from "../containers/Articles";
import { Filter } from "../containers/Filter";
import { Sorting } from "../containers/Sorting";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Articles</h1>

      <Root>
        <Sorting />
        <Filter />
        <Articles />
      </Root>
    </div>
  );
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
`