import { useState } from 'react';
import { Beneficiario as BeneficiarioModel } from '../../../../Models/contratos.model';
import { formatearCoste } from '../../../../utils/utils';
import {
  BeneficiarioIconContainer,
  BeneficiarioInformation,
  BeneficiarioInformationContainer,
  BeneficiarioStyle,
  Coste
} from './Beneficiario.styled';
import ExpandIcon from '../../../../../public/expand-icon.svg' 
import CollapseIcon from '../../../../../public/collapse-icon.svg' 

export interface BeneficiarioProps {
  beneficiario: BeneficiarioModel;
}

const getIconIsPyme = (isPyme: boolean) => (isPyme ? '✅' : '❌');

export const Beneficiario: React.FC<BeneficiarioProps> = ({ beneficiario }) => {
  const { nombre, coste, nif, esPyme, descripcion } = beneficiario;
  const [isExpanded, setIsExpanded] = useState(false);

  function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <BeneficiarioStyle>
      {isExpanded ? (
        <BeneficiarioIconContainer onClick={handleExpand} aria-label="Contraer informacion">
          <ExpandIcon strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </BeneficiarioIconContainer>
      ) : (
        <BeneficiarioIconContainer onClick={handleExpand} aria-label="Expandir informacion">
          <CollapseIcon strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"></CollapseIcon>
        </BeneficiarioIconContainer>
      )}
      <BeneficiarioInformationContainer>
        <BeneficiarioInformation>
          <span>Nombre Empresa:</span>
          <span>{nombre}</span>
        </BeneficiarioInformation>
        <BeneficiarioInformation>
          <span>Coste:</span>
          <Coste>{formatearCoste(coste)}</Coste>
        </BeneficiarioInformation>
        {isExpanded && (
          <>
            <BeneficiarioInformation>
              <span>NIF:</span>
              <span>{nif.replaceAll('.', '')}</span>
            </BeneficiarioInformation>
            <BeneficiarioInformation>
              <span>PyME:</span>
              <span>{getIconIsPyme(esPyme)}</span>
            </BeneficiarioInformation>
            <BeneficiarioInformation>
              <span>Descripción:</span>
              <span>{descripcion}</span>
            </BeneficiarioInformation>
          </>
        )}
      </BeneficiarioInformationContainer>
    </BeneficiarioStyle>
  );
};
