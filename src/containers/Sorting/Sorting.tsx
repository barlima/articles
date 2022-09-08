import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../components/atoms/Icon";
import { Switch } from "../../components/atoms/Switch";
import { useArticlesContext } from "../../context";
import { Sorting as SortingEnum } from "../../types/Sorting";

type OptionType = {
  title: React.ReactNode;
  value: SortingEnum;
  active: boolean;
};

export const Sorting: React.FC = () => {
  const { setSortBy, sortBy } = useArticlesContext();

  const handleChange = (option: OptionType): void => {
    setSortBy(option.value);
  };

  return (
    <Switch<OptionType>
      options={[
        {
          title: (
            <OptionTitle>
              Date <Icon type="arrow-up" />
            </OptionTitle>
          ),
          value: SortingEnum.DATE_ASC,
          active: sortBy === SortingEnum.DATE_ASC,
        },
        {
          title: (
            <OptionTitle>
              Date <Icon type="arrow-down" />
            </OptionTitle>
          ),
          value: SortingEnum.DATE_DESC,
          active: sortBy === SortingEnum.DATE_DESC,
        },
      ]}
      onChange={handleChange}
    />
  );
};

const OptionTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`