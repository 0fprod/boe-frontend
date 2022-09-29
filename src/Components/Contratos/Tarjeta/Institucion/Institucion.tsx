import React from 'react';
import { Institucion as InstitucionModel } from '../../../../Models/contratos.model';
import { InstitucionWrapper, StyledLabel, StyledParagraph, WrapperLabel } from './Institucion.styled';

export interface InstitucionProps {
  institucion: InstitucionModel;
}

export const Institucion: React.FC<InstitucionProps> = ({ institucion }) => {
  const { actividad, email, nif, nombre, telefono, tipoActividad, web } = institucion;

  return (
    <InstitucionWrapper>
      <WrapperLabel>Institución adjudicadora</WrapperLabel>
      {actividad && (
        <p>
          <StyledLabel>Actividad:</StyledLabel>
          <StyledParagraph>{actividad}</StyledParagraph>
        </p>
      )}
      {tipoActividad && (
        <p>
          <StyledLabel>Tipo de actividad:</StyledLabel>
          <StyledParagraph>{tipoActividad}</StyledParagraph>
        </p>
      )}
      {nombre && (
        <p>
          <StyledLabel>Nombre:</StyledLabel>
          <StyledParagraph>{nombre}</StyledParagraph>
        </p>
      )}
      {nif && (
        <p>
          <StyledLabel>NIF:</StyledLabel>
          <StyledParagraph>{nif}</StyledParagraph>
        </p>
      )}
      {email && (
        <p>
          <StyledLabel>Email:</StyledLabel>
          <StyledParagraph>{email}</StyledParagraph>
        </p>
      )}
      {telefono && (
        <p>
          <StyledLabel>Teléfono:</StyledLabel>
          <StyledParagraph>{telefono}</StyledParagraph>
        </p>
      )}
      {web && (
        <p>
          <StyledLabel>Web:</StyledLabel>
          {web}
        </p>
      )}
    </InstitucionWrapper>
  );
};
