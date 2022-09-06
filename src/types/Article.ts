import { ArticleCategory } from "./ArticleCategory";

export type Article = {
  id: number;
  category: ArticleCategory;
  date: string;
  image: string;
  preamble: string;
  title: string;
};
