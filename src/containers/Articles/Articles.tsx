import React from "react";
import { ArticlesContextProvider } from "../../context";

export const Articles: React.FC = () => {
  return (
    <ArticlesContextProvider>Content will be here</ArticlesContextProvider>
  );
};
