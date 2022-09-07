import { Article } from "../../types/Article";
import { Sorting } from "../../types/Sorting";
import { dateToMiliseconds } from "../formatters/dateFormatter";

export const sortArticles = (
  articles: Article[],
  sortBy: Sorting
): Article[] => {
  return articles.sort((a, b) => {
    const dateA = dateToMiliseconds(a.date);
    const dateB = dateToMiliseconds(b.date);

    return sortBy === Sorting.DATE_DESC ? dateB - dateA : dateA - dateB;
  });
};
