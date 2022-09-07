import React, { useState } from "react";
import { useArticlesContext } from "../../context";
import { Sorting as SortingEnum } from "../../types/Sorting";

export const Sorting: React.FC = () => {
  const { setSortBy } = useArticlesContext();

  return (
    <div>
      <button onClick={() => setSortBy(SortingEnum.DATE_ASC)}>Date asc</button>
      <button onClick={() => setSortBy(SortingEnum.DATE_DESC)}>
        Date desc
      </button>
    </div>
  );
};
