import React, { useContext, useState } from 'react';
import { AppContext } from '../../../Context/contratos.context';
import { ButtonWrapper, CalendarioWrapper, InputGroup, InputsWrapper, StyledButton, StyledInput, StyledLabel } from './Calendario.styled';

export interface CalendarioProps {
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => void;
}

export const Calendario: React.FC<CalendarioProps> = ({ obtenerContratosPorFecha }) => {
  const fechaMinima = '2021-01-01';
  const { query } = useContext(AppContext);
  const [fechaInicio, setFechaInicio] = useState<string>(query.inicio);
  const [fechaFin, setFechaFin] = useState<string>(query.final ?? '');

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
