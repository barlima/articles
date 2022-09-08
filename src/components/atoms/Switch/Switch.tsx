import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../styles/breakpoints";

type SwitchProps<OptionType> = {
  solid?: boolean;
  vertical?: boolean;
  options: OptionType[];
  onChange: (option: OptionType) => void;
};

export const Switch = <
  OptionType extends { title: string | React.ReactNode; active: boolean }
>({
  solid = false,
  vertical = false,
  options,
  onChange,
}: SwitchProps<OptionType>) => {
  const active = options.find((option) => option.active);

  if (options.length === 0) {
    return null;
  }

  return (
    <Root
      count={options.length}
      position={active ? options.indexOf(active) : 0}
      solid={solid}
      vertical={vertical}
    >
      {options.map((option, index) => (
        <Option key={index} onClick={() => onChange(option)}>
          {option.title}
        </Option>
      ))}
    </Root>
  );
};

const Root = styled.div<{
  position: number;
  solid: boolean;
  count: number;
  vertical: boolean;
}>`
  background-color: var(--color-shadow);
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;

  @media ${breakpoints.size.m} {
    flex-direction: ${(p) => (p.vertical ? "column" : "row")};
  }

  &::after {
    content: "";
    position: absolute;
    width: ${(p) => `calc(100%/${p.count})`};
    height: ${(p) => (p.solid ? "100%" : "3px")};
    transform: ${(p) => `translateX(${p.position * 100}%)`};
    bottom: 0;
    background-color: var(--color-accent);
    transition: transform 0.5s;
    z-index: 0;

    @media ${breakpoints.size.m} {
      ${(p) =>
        p.vertical
          ? `
        width: 100%;
        height: calc(100%/${p.count});
        transform: translateY(${p.position * 100}%);
        top: 0;
      `
          : `
        width: calc(100%/${p.count});
        height: ${p.solid ? "100%" : "3px"};
        transform: translateX(${p.position * 100}%);
        bottom: 0;
      `}
    }
  }
`;

const Option = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  flex: 1;
  padding: var(--space-s) var(--space-m);
  position: relative;
  white-space: nowrap;
  z-index: 1;
  min-width: 100px;
  width: 100%;
`;
