import React, { useEffect, useState } from 'react';
import { Contrato } from '../../../Models/contratos.model';
import { calcularTotal, formatearCoste, formatearFecha, generarIdArticulos } from '../../../utils/utils';
import { Beneficiarios } from './Beneficiarios/Beneficiarios';
import { Institucion } from './Institucion/Institucion';
import { CopiarEnlace, StyledDescripcion, StyledLink, TarjetaHeader, TarjetaWrapper, Tooltip } from './Tarjeta.styled';
import CopyIcon from '/public/copy.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
  const [mostrarTooltip, setMostrarTooltip] = useState(false);

  const copiar = () => {
    const url = window.location.href
    const idEnUrl = url.indexOf(contrato.contratoId) !== -1
    navigator.clipboard.writeText(idEnUrl ? url : url + contrato.contratoId);
    setMostrarTooltip(true);

    setTimeout(() => {
      setMostrarTooltip(false);
    }, 1800);
  };

  useEffect(() => {
    setCosteTotal(calcularTotal(beneficiarios));
  }, [beneficiarios]);

  return (
    <TarjetaWrapper id={contrato.contratoId}>
      <TarjetaHeader>
        <span aria-label="fecha">{formatearFecha(fechaPub)}</span>
        <span aria-label="coste total">{formatearCoste(costeTotal)}</span>
        <CopiarEnlace onClick={copiar}>
          {mostrarTooltip && <Tooltip>Enlace copiado al portapapeles!</Tooltip>}
          <Image src={CopyIcon} width={24} height={24} alt="copiar enlace" />
        </CopiarEnlace>
      </TarjetaHeader>
      <Institucion institucion={institucion} />
      <StyledDescripcion>{descripcion}</StyledDescripcion>
      <Beneficiarios beneficiarios={beneficiarios} />
      <StyledLink href={`${urlBase}${urlPdf}`} target="_blank" rel="noreferrer">
        Ver original
      </StyledLink>
    </TarjetaWrapper>
  );
};
