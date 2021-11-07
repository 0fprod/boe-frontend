import React from 'react';
import { Footer } from './Footer/Footer';
import { Main } from './Main/Main';
import { NavMenu } from './NavMenu/NavMenu';

interface Props {}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <NavMenu />
      <Main>{children}</Main>
      <Footer />
    </React.Fragment>
  );
};
