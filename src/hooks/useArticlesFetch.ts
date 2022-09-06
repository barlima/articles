import { useCallback, useEffect, useState } from "react";
import { Article } from "../types/Article";
import { ArticleCategory } from "../types/ArticleCategory";

const API_URL = process.env.REACT_APP_API_URI;

export const useArticlesFetch = (
  category?: ArticleCategory
): {
  loading: boolean;
  error: boolean;
  articles: Record<ArticleCategory, Article[]>;
} => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState<Record<ArticleCategory, Article[]>>({
    fashion: [],
    sports: [],
  });

  const cacheOrFetch = useCallback(
    async (articleCategory: ArticleCategory): Promise<Article[]> => {
      if (articles[articleCategory].length) {
        return Promise.resolve(articles[articleCategory]);
      }

      const response = await fetch(`${API_URL}/articles/${articleCategory}`);
      return await response.json();
    },
    []
  );

  const fetchArticles = useCallback(
    async (articleCategory?: ArticleCategory): Promise<void> => {
      setLoading(true);
      setError(false);

      try {
        if (!articleCategory) {
          const [fashion, sports] = await Promise.all([
            cacheOrFetch("fashion"),
            cacheOrFetch("sports"),
          ]);

          setArticles({
            fashion,
            sports,
          });

          return;
        }

        const data = await cacheOrFetch(articleCategory);

        setArticles((current) => ({
          ...current,
          [articleCategory]: data,
        }));
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    console.log(category);
    fetchArticles(category);
  }, [category]);

  return {
    loading,
    error,
    articles,
  };
};
