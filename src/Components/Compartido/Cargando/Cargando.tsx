import React from 'react';
import { CargandoWrapper } from './Cargando.styled';

export const Cargando: React.FC = () => {
  return (
    <React.Fragment>
      <CargandoWrapper>
        <div className="lds-dual-ring"></div>
      </CargandoWrapper>
    </React.Fragment>
  );
};
