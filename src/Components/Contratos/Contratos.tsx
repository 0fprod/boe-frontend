import React from 'react';
import { Contrato } from '../../Models/contratos.model';

interface Props {
  contratos: Contrato[];
}

export const ListadoContratos: React.FC<Props> = ({ contratos }) => {
  return (
    <>
      <div> Contratazos </div>
      {contratos &&
        contratos.length &&
        contratos.map((c, index) => {
          return <pre key={index}>{JSON.stringify(c, null, 4)}</pre>;
        })}
    </>
  );
};
