import React from 'react';
import { Institucion as InstitucionModel } from '../../../../Models/contratos.model';
import { InstitucionWrapper, StyledLabel, StyledListItem } from './Institucion.styled';

export interface InstitucionProps {
  institucion: InstitucionModel;
}

export const Institucion: React.FC<InstitucionProps> = ({ institucion }) => {
  const { actividad, email, nif, nombre, telefono, tipoActividad, web } = institucion;
  return (
    <InstitucionWrapper>
      {actividad && (
        <StyledListItem>
          <StyledLabel>Actividad:</StyledLabel>
          {actividad}
        </StyledListItem>
      )}
      {tipoActividad && (
        <StyledListItem>
          <StyledLabel>Tipo de actividad:</StyledLabel>
          {tipoActividad}
        </StyledListItem>
      )}
      {nombre && (
        <StyledListItem>
          <StyledLabel>Nombre:</StyledLabel>
          {nombre}
        </StyledListItem>
      )}
      {nif && (
        <StyledListItem>
          <StyledLabel>NIF:</StyledLabel>
          {nif}
        </StyledListItem>
      )}
      {email && (
        <StyledListItem>
          <StyledLabel>Email:</StyledLabel>
          {email}
        </StyledListItem>
      )}
      {telefono && (
        <StyledListItem>
          <StyledLabel>Teléfono:</StyledLabel>
          {telefono}
        </StyledListItem>
      )}
      {web && (
        <StyledListItem>
          <StyledLabel>Web:</StyledLabel>
          {web}
        </StyledListItem>
      )}
    </InstitucionWrapper>
  );
};
