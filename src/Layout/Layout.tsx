import React from "react";
import { NavMenu } from "../Components/Header/NavMenu";

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavMenu />
      {children}
    </>
  );
};
