import React from "react";
import styled from "styled-components";
import { ErrorLayout } from "../components/layouts/ErrorLayout";

export const ErrorPage: React.FC = () => (
  <ErrorLayout title="500" message="Something went wrong" />
);
