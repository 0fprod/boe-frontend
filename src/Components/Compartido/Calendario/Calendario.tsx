import React, { useState } from 'react';
import { formatearFecha } from '../../../utils/utils';
import { ButtonWrapper, CalendarioWrapper, InputGroup, InputsWrapper, StyledButton, StyledInput, StyledLabel } from './Calendario.styled';

export interface CalendarioProps {
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => void;
}

export const Calendario: React.FC<CalendarioProps> = ({ obtenerContratosPorFecha }) => {
  const fechaMinima = '2021-01-01';
  const fechaMaxima = formatearFecha(new Date().toISOString());
  const [fechaInicio, setFechaInicio] = useState<string>(formatearFecha(new Date().toISOString()));
  const [fechaFin, setFechaFin] = useState<string>('');

  const fechaInicioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    if (new Date(value) > new Date(fechaFin)) {
      setFechaFin(value);
    }
    setFechaInicio(value);
  };

  const fechaFindHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    if (new Date(value) > new Date(fechaInicio)) {
      setFechaFin(value);
    } else {
      setFechaFin(fechaInicio);
    }
  };

  const buscarHandler = (_: React.MouseEvent<HTMLButtonElement>) => {
    obtenerContratosPorFecha(fechaInicio, fechaFin);
  };

  return (
    <CalendarioWrapper>
      <InputsWrapper>
        <InputGroup>
          <StyledLabel htmlFor="fechaInicio">Fecha inicial</StyledLabel>
          <StyledInput
            id="fechaInicio"
            aria-label="fecha inicial"
            type="date"
            min={fechaMinima}
            name="fecha-inicio"
            onChange={fechaInicioHandler}
            value={fechaInicio}
          />
        </InputGroup>

        <InputGroup>
          <StyledLabel htmlFor="fechaFinal">
            Fecha final <small>(opcional)</small>
          </StyledLabel>
          <StyledInput
            id="fechaFinal"
            aria-label="fecha final"
            type="date"
            min={fechaMinima}
            name="fecha-fin"
            onChange={fechaFindHandler}
            value={fechaFin}
          />
        </InputGroup>
      </InputsWrapper>

      <ButtonWrapper>
        <StyledButton onClick={buscarHandler}>Buscar!</StyledButton>
      </ButtonWrapper>
    </CalendarioWrapper>
  );
};
