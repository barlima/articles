import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useArticlesFetch } from "../hooks";
import { Article } from "../types/Article";
import { ArticleCategory } from "../types/ArticleCategory";

type ArticlesContextType = {
  category?: ArticleCategory;
  articles: Article[];
  loading: boolean;
  error: boolean;
};

const initialState: ArticlesContextType = {
  articles: [],
  category: "fashion",
  loading: true,
  error: false,
};

export const ArticlesContext = createContext<ArticlesContextType>(initialState);

export const ArticlesContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [category, setCategory] = useState<ArticleCategory | undefined>(
    initialState.category
  );

  const { loading, articles, error } = useArticlesFetch(category);

  const allArticles = Object.values(articles).reduce(
    (acc, cateogryArticles) => [...acc, ...cateogryArticles],
    []
  );

  return (
    <ArticlesContext.Provider
      value={{
        articles: category ? articles[category] : allArticles,
        category,
        loading,
        error,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
