import React from "react";
import styled from "styled-components";

import { Card } from "../../components/molecules";
import { useArticlesContext } from "../../context";

export const Articles: React.FC = () => {
  const { articles } = useArticlesContext();

  return (
    <Root>
      {articles.map((article) => (
        <Card
          key={article.id}
          title={article.title}
          description={article.preamble}
          date={article.date}
          image={article.image}
        />
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
`;
