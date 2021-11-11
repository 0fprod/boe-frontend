import React from 'react';
import { renderWithTheme } from '../../../styles/theme.test.utils';
import { construirContrato, construirDetallesDeContrato, constuirInstitucion } from '../../Models/contratos.model';
import { ListadoContratos } from './Contratos';

describe('Contratos Specs', () => {
  it('Renderiza una lista de contratos', () => {
    const contratos = [
      construirContrato({
        detalles: construirDetallesDeContrato({
          institucion: constuirInstitucion({ nombre: 'Institucion Irrelevante' }),
          descripcion: 'Contrato Irrelevante',
        }),
      }),
    ];
    const { getByText } = renderWithTheme(<ListadoContratos contratos={contratos} obtenerContratosPorFecha={jest.fn()} />);

    expect(getByText(/contrato irrelevante/i)).toBeInTheDocument();
    expect(getByText(/institucion irrelevante/i)).toBeInTheDocument();
  });
  it('Si no hay contratos muestra un mensaje específico', () => {
    const { getByText } = renderWithTheme(<ListadoContratos contratos={[]} obtenerContratosPorFecha={jest.fn()} />);

    expect(getByText(/🚧 no hay contratos para las fechas seleccionadas 🚧/i)).toBeInTheDocument();
  });
});
