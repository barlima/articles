import dayjs from "dayjs";
import "dayjs/locale/nn";

import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const DATE_FORMAT = "D. MMMM YYYY";

export const dateToMiliseconds = (date: string): number => {
  const parsedDate = dayjs(date, DATE_FORMAT, "nn");
  return Number(parsedDate.toDate());
};
