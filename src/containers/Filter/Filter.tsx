import React from "react";
import { Switch } from "../../components/atoms/Switch";
import { useArticlesContext } from "../../context";
import { ArticleCategory } from "../../types/ArticleCategory";

type OptionType = { title: string; value?: ArticleCategory; active: boolean };

export const Filter: React.FC = () => {
  const { category, setCategory } = useArticlesContext();

  const handleChange = (option: OptionType): void => {
    setCategory(option.value);
  };

  return (
    <div>
      <Switch<OptionType>
        solid
        vertical
        options={[
          {
            title: "Fashion",
            value: "fashion",
            active: category === "fashion",
          },
          {
            title: "Sports",
            value: "sports",
            active: category === "sports",
          },
          {
            title: "All",
            value: undefined,
            active: !category,
          },
        ]}
        onChange={handleChange}
      />
    </div>
  );
};
