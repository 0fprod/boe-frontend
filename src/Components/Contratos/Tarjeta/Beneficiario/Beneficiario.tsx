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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="12" y1="8" x2="8" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="16" y1="12" x2="12" y2="8"></line>
          </svg>
        </BeneficiarioIconContainer>
      ) : (
        <BeneficiarioIconContainer onClick={handleExpand} aria-label="Expandir informacion">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="12" r="9"></circle>
            <line x1="8" y1="12" x2="12" y2="16"></line>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="16" y1="12" x2="12" y2="16"></line>
          </svg>
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
