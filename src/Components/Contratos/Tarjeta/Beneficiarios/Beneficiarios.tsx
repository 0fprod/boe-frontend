import React from 'react';
import { Beneficiario } from '../../../../Models/contratos.model';
import { formatearCoste } from '../../../../utils/utils';
import {
  BeneficarioItem,
  BeneficiariosWrapper,
  DetallesBeneficiario,
  StyledBeneficiario,
  StyledLabel,
  StyledListItem,
} from './Beneficiarios.styled';

export interface BeneficiariosProps {
  beneficiarios: Beneficiario[];
}

export const Beneficiarios: React.FC<BeneficiariosProps> = ({ beneficiarios }) => {
  const totalBeneficiarios = beneficiarios.length;
  const pyme: string = '✅';
  const noPyme: string = '❌';

  return (
    <BeneficiariosWrapper>
      {beneficiarios &&
        beneficiarios.length &&
        beneficiarios.map((b, i) => (
          <BeneficarioItem key={i}>
            <StyledBeneficiario>
              <span aria-label="nombre">{b.nombre}</span>
              <span aria-label="coste">{formatearCoste(b.coste)}</span>
            </StyledBeneficiario>
            <DetallesBeneficiario>
              {b.nif && (
                <StyledListItem>
                  <StyledLabel>NIF:</StyledLabel>
                  {b.nif}
                </StyledListItem>
              )}
              <StyledListItem>
                <StyledLabel>PYME:</StyledLabel>
                {b.esPyme ? pyme : noPyme}
              </StyledListItem>
              {totalBeneficiarios > 1 && <p>{b.descripcion}</p>}
            </DetallesBeneficiario>
          </BeneficarioItem>
        ))}
    </BeneficiariosWrapper>
  );
};
