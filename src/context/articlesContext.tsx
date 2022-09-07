import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useArticlesFetch } from "../hooks";
import { Article } from "../types/Article";
import { ArticleCategory } from "../types/ArticleCategory";
import { Sorting } from "../types/Sorting";
import { sortArticles } from "../utils/helpers/sortArticles";

type ArticlesContextType = {
  category?: ArticleCategory;
  articles: Article[];
  sortBy: Sorting;
  loading: boolean;
  error: boolean;
  setSortBy: (sortBy: Sorting) => void;
  setCategory: (category?: ArticleCategory) => void;
};

const initialState: ArticlesContextType = {
  articles: [],
  category: "fashion",
  sortBy: Sorting.DATE_DESC,
  loading: true,
  error: false,
  setSortBy: () => null,
  setCategory: () => null,
};

export const ArticlesContext = createContext<ArticlesContextType>(initialState);

export const ArticlesContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [category, setCategory] = useState<ArticleCategory | undefined>(
    initialState.category
  );
  const [sortBy, setSortBy] = useState<Sorting>(initialState.sortBy);

  const { loading, articles: articlesMap, error } = useArticlesFetch(category);

  const allArticles = Object.values(articlesMap).reduce(
    (acc, cateogryArticles) => [...acc, ...cateogryArticles],
    []
  );

  const articles = category ? articlesMap[category] : allArticles;

  return (
    <ArticlesContext.Provider
      value={{
        articles: sortArticles(articles, sortBy),
        category,
        sortBy,
        loading,
        error,
        setCategory,
        setSortBy,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticlesContext = () => useContext(ArticlesContext);
