import React from "react";
import { useArticlesContext } from "../../context";

export const Filter: React.FC = () => {
  const { setCategory } = useArticlesContext();

  return (
    <div>
      <button onClick={() => setCategory("fashion")}>Fashion</button>
      <button onClick={() => setCategory("sports")}>Sports</button>
      <button onClick={() => setCategory(undefined)}>All</button>
    </div>
  );
};
