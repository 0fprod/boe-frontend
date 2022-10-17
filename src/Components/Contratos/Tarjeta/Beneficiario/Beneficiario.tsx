import { useState } from 'react';
import { Beneficiario as BeneficiarioModel } from '../../../../Models/contratos.model';
import { formatearCoste } from '../../../../utils/utils';
import {
  BeneficiarioIconContainer,
  BeneficiarioInformation,
  BeneficiarioInformationContainer,
  BeneficiarioStyle,
  ExtraInfo,
  Coste,
} from './Beneficiario.styled';
import Chevron from '../../../../../public/right-button.png'
import NextImage from 'next/image';

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
        <BeneficiarioIconContainer onClick={handleExpand} aria-label="Contraer informacion" style={{position:'absolute'}}>
          <NextImage src={Chevron} alt="expand" width={32} height={32} style={{transform: isExpanded ? 'rotate(90deg)': '', transition: '0.25s'}}/>
        </BeneficiarioIconContainer>
      <BeneficiarioInformationContainer>
        <BeneficiarioInformation>
          <span>Nombre Empresa:</span>
          <span>{nombre}</span>
        </BeneficiarioInformation>
        <BeneficiarioInformation>
          <span>Coste:</span>
          <Coste>{formatearCoste(coste)}</Coste>
        </BeneficiarioInformation>
        <ExtraInfo isExpanded={isExpanded}>
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
        </ExtraInfo>
      </BeneficiarioInformationContainer>
    </BeneficiarioStyle>
  );
};
