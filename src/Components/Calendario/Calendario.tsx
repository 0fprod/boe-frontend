import React, { useState } from 'react';

export interface CalendarioProps {
  obtenerContratosPorFecha: (fechaInicio: string, fechaFin?: string) => {};
}

export const Calendario: React.FC<CalendarioProps> = ({ obtenerContratosPorFecha }) => {
  const formatFecha = (fecha: Date): string => {
    const yyyy = fecha.getFullYear();
    const mm = fecha.getMonth() + 1;
    const dd = fecha.getDay();

    return `${yyyy}-${mm}-${dd}`;
  };

  const fechaMinima = '2021-01-01';
  const fechaMaxima = formatFecha(new Date());

  const [fechaInicio, setFechaInicio] = useState<string>(formatFecha(new Date()));
  const [fechaFin, setFechaFin] = useState<string>('');

  const fechaInicioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
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
    <React.Fragment>
      <label htmlFor="fechaInicio">Fecha inicial</label>
      <input
        id="fechaInicio"
        aria-label="fecha inicial"
        type="date"
        min={fechaMinima}
        max={fechaMaxima}
        name="fecha-inicio"
        onChange={fechaInicioHandler}
        value={fechaInicio}
      />
      <label htmlFor="fechaFinal">Fecha final</label>
      <input
        id="fechaFinal"
        aria-label="fecha final"
        type="date"
        min={fechaMinima}
        max={fechaMaxima}
        name="fecha-fin"
        onChange={fechaFindHandler}
        value={fechaFin}
      />
      <button onClick={buscarHandler}>Buscar!</button>
    </React.Fragment>
  );
};
