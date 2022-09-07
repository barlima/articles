import { Article } from "../../types/Article";
import { Sorting } from "../../types/Sorting";
import { sortArticles } from "./sortArticles";

describe("sortArticles", () => {
  const articles = [
    { date: "7. februar 2019" },
    { date: "5. desember 2019" },
    { date: "9. februar 2019" },
    { date: "1. desember 2019" },
  ] as Article[];

  it("should sort ascending", () => {
    const expected = sortArticles(articles, Sorting.DATE_ASC);

    expect(expected[0].date).toEqual("7. februar 2019");
    expect(expected[1].date).toEqual("9. februar 2019");
    expect(expected[2].date).toEqual("1. desember 2019");
    expect(expected[3].date).toEqual("5. desember 2019");
  });

  it("should sort descending", () => {
    const expected = sortArticles(articles, Sorting.DATE_DESC);

    expect(expected[0].date).toEqual("5. desember 2019");
    expect(expected[1].date).toEqual("1. desember 2019");
    expect(expected[2].date).toEqual("9. februar 2019");
    expect(expected[3].date).toEqual("7. februar 2019");
  });
});
