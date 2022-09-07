import React, { useState } from "react";
import { Switch } from "../../components/atoms/Switch";
import { useArticlesContext } from "../../context";
import { Sorting as SortingEnum } from "../../types/Sorting";

type OptionType = { title: string; value: SortingEnum; active: boolean };

export const Sorting: React.FC = () => {
  const { setSortBy, sortBy } = useArticlesContext();

  const handleChange = (option: OptionType): void => {
    setSortBy(option.value);
  };

  return (
    <Switch<OptionType>
      options={[
        {
          title: "Date ASC",
          value: SortingEnum.DATE_ASC,
          active: sortBy === SortingEnum.DATE_ASC,
        },
        {
          title: "Date DESC",
          value: SortingEnum.DATE_DESC,
          active: sortBy === SortingEnum.DATE_DESC,
        },
      ]}
      onChange={handleChange}
    />
  );
};
