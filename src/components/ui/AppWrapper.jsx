import React from "react";
import { styled } from "styled-components";

export const AppWrapper = ({ children }) => {
  return <AppMain>{children}</AppMain>;
};
const AppMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100%;
`;
