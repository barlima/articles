import { dateToMiliseconds } from "./dateFormatter";

describe("dateFormatter", () => {
  it("should format date string", () => {
    const date = "13. desember 2018";
    const actual = dateToMiliseconds(date);
    expect(actual).toEqual(1544655600000);
  });

  it("should handle invalid date string", () => {
    const date = "invalid";
    const actual = dateToMiliseconds(date);

    expect(actual).toBeNaN();
  });
});
