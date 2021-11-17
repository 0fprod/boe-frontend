import React, { useEffect, useState } from 'react';
import { Contrato } from '../../../Models/contratos.model';
import { calcularTotal, formatearCoste, formatearFecha } from '../../../utils/utils';
import { Beneficiarios } from './Beneficiarios/Beneficiarios';
import { Institucion } from './Institucion/Institucion';
import { StyledDescripcion, StyledLink, TarjetaHeader, TarjetaWrapper } from './Tarjeta.styled';

export interface TarjetaProps {
  contrato: Contrato;
}

export const Tarjeta: React.FC<TarjetaProps> = ({ contrato }) => {
  const urlBase = 'https://boe.es/';
  const {
    fechaPub,
    urlPdf,
    detalles: { institucion, descripcion, beneficiarios },
  } = contrato;

  const [costeTotal, setCosteTotal] = useState(0);

  useEffect(() => {
    setCosteTotal(calcularTotal(beneficiarios));
  }, [beneficiarios]);

  return (
    <TarjetaWrapper>
      <TarjetaHeader>
        <span aria-label="fecha">{formatearFecha(fechaPub)}</span>
        <span aria-label="coste total">{formatearCoste(costeTotal)}</span>
      </TarjetaHeader>
      <Institucion institucion={institucion} />
      <StyledDescripcion>{descripcion}</StyledDescripcion>
      <Beneficiarios beneficiarios={beneficiarios} />
      <StyledLink href={`${urlBase}${urlPdf}`} target="_blank" rel="noreferrer">
        Ver PDF
      </StyledLink>
    </TarjetaWrapper>
  );
};
