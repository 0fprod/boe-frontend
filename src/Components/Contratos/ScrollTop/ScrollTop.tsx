import React from 'react';
import { ScrollToTop } from './ScrollTop.styled';

export const ScrollTop: React.FC<{}> = () => {
  // Un poco de brujería, el window.scrollTo() no funciona aquí 🤔
  const scrollUp = (_: React.MouseEvent) => {
    document && document.getElementsByTagName('nav')[0].scrollIntoView();
  };

  return <ScrollToTop onClick={scrollUp}> 🔝 </ScrollToTop>;
};
