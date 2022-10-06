import React from 'react';
import { Beneficiario as BeneficiarioModel } from '../../../../Models/contratos.model';
import { formatearCoste } from '../../../../utils/utils';
import { Beneficiario } from '../Beneficiario/Beneficiario';
import {
  BeneficiarioItemHeader,
  BeneficiariosBody,
  BeneficiariosBodyMobile,
  BeneficiariosWrapper,
  BeneficiarioTableCell,
  WrapperLabel,
} from './Beneficiarios.styled';

export interface BeneficiariosProps {
  beneficiarios: BeneficiarioModel[];
}

const getIconIsPyme = (isPyme: boolean) => (isPyme ? '✅' : '❌');

export const Beneficiarios: React.FC<BeneficiariosProps> = ({ beneficiarios }) => {
  return (
    <BeneficiariosWrapper>
      <WrapperLabel>Adjudicatarios</WrapperLabel>
      <BeneficiariosBody>
        <thead>
          <tr>
            <BeneficiarioItemHeader>Nombre Empresa</BeneficiarioItemHeader>
            <BeneficiarioItemHeader>Coste</BeneficiarioItemHeader>
            <BeneficiarioItemHeader>NIF</BeneficiarioItemHeader>
            <BeneficiarioItemHeader>PyME</BeneficiarioItemHeader>
            <BeneficiarioItemHeader>Descripción</BeneficiarioItemHeader>
          </tr>
        </thead>
        <tbody>
          {beneficiarios.map(({ nombre, coste, nif, esPyme, descripcion }, i) => (
            <tr key={i}>
              <BeneficiarioTableCell>{nombre}</BeneficiarioTableCell>
              <BeneficiarioTableCell>{formatearCoste(coste)}</BeneficiarioTableCell>
              <BeneficiarioTableCell>{nif.replaceAll('.', '')}</BeneficiarioTableCell>
              <BeneficiarioTableCell>{getIconIsPyme(esPyme)}</BeneficiarioTableCell>
              <BeneficiarioTableCell>{descripcion}</BeneficiarioTableCell>
            </tr>
          ))}
        </tbody>
      </BeneficiariosBody>
      <BeneficiariosBodyMobile>
        {beneficiarios.map((beneficiario, i) => (
          <Beneficiario key={i} beneficiario={beneficiario} />
        ))}
      </BeneficiariosBodyMobile>
    </BeneficiariosWrapper>
  );
};
