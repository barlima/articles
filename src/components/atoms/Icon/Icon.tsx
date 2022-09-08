import React from "react";

export const iconHashMap = {
  "arrow-up": React.lazy(() => import("./icons/ArrowUp")),
  "arrow-down": React.lazy(() => import("./icons/ArrowDown")),
};

export type IconType = keyof typeof iconHashMap;

type IconProps = React.SVGProps<SVGSVGElement> & {
  type: IconType;
};

export const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  const Component = iconHashMap[type];

  return <Component width={20} height={20} {...props} />;
};
