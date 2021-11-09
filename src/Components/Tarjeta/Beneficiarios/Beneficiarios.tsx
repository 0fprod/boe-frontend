import React from 'react';
import { Beneficiario } from '../../../Models/contratos.model';
import { formatearCoste } from '../../../utils/utils';
import { BeneficiariosWrapper, StyledBeneficiario } from './Beneficiarios.styled';

export interface BeneficiariosProps {
  beneficiarios: Beneficiario[];
}

export const Beneficiarios: React.FC<BeneficiariosProps> = ({ beneficiarios }) => {
  // const { nombre, nif, descripcion, coste, esPyme, lote } = beneficiarios;

  return (
    <BeneficiariosWrapper>
      {beneficiarios &&
        beneficiarios.length &&
        beneficiarios.map((b, i) => (
          <StyledBeneficiario key={i}>
            <span aria-label="nombre">{b.nombre}</span>
            <span aria-label="coste">{formatearCoste(b.coste)}</span>
          </StyledBeneficiario>
        ))}
    </BeneficiariosWrapper>
  );
};
