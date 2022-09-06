import { useEffect, useState } from "react";
import { Article } from "../types/Article";
import { ArticleCategory } from "../types/ArticleCategory";

const API_URL = process.env.REACT_APP_API_URI;

export const useArticlesFetch = (
  category: ArticleCategory
): {
  loading: boolean;
  articles: Article[];
} => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  console.log("url -> ", API_URL);

  const fetchArticles = async (
    articleCategory: ArticleCategory
  ): Promise<void> => {
    const response = await fetch(`${API_URL}/articles/${articleCategory}`);
    const data = await response.json();
    setArticles(data.articles)
  };

  useEffect(() => {
    fetchArticles(category);
  }, [category]);

  return {
    loading,
    articles,
  };
};
