import { render } from '@testing-library/react';
import React from 'react';
import { construirBeneficiario, construirContrato, construirDetallesDeContrato, constuirInstitucion } from '../../Models/contratos.model';
import { Tarjeta } from './Tarjeta';

describe('Tarjeta specs', () => {
  it('Renderiza una tarjeta con los datos de un contrato', () => {
    const contrato = construirContrato({
      fechaPub: '2021/11/13',
      titulo: 'Contrato irrelevante',
      detalles: construirDetallesDeContrato({
        beneficiarios: [
          construirBeneficiario({
            nombre: 'Beneficiario irrelevante',
          }),
        ],
        institucion: constuirInstitucion({
          actividad: 'Actividad irrelevante',
          nombre: 'Institucion irrelevante',
        }),
      }),
    });
    const { getByText } = render(<Tarjeta contrato={contrato} />);

    expect(getByText(/beneficiario irrelevante/i)).toBeInTheDocument();
    expect(getByText(/contrato irrelevante/i)).toBeInTheDocument();
    expect(getByText(/2021\/11\/13/i)).toBeInTheDocument();
    expect(getByText(/actividad irrelevante/i)).toBeInTheDocument();
    expect(getByText(/institucion irrelevante/i)).toBeInTheDocument();
  });
  it.todo('Renderiza una tarjeta con los datos de un contrato con varios lotes');
  it.todo('Renderiza una tarjeta con los datos de un contrato con varios beneficiarios');
  it('Renderiza el coste total de los beneficiarios', () => {
    const contrato = construirContrato({
      detalles: construirDetallesDeContrato({
        beneficiarios: [
          construirBeneficiario({
            coste: 10,
            nombre: 'Beneficiario irrelevante1',
          }),
          construirBeneficiario({
            coste: 10,
            nombre: 'Beneficiario irrelevante2',
          }),
        ],
      }),
    });
    const { getByText } = render(<Tarjeta contrato={contrato} />);

    expect(getByText(/beneficiario irrelevante1/i)).toBeInTheDocument();
    expect(getByText(/beneficiario irrelevante2/i)).toBeInTheDocument();
    expect(getByText(/20/i)).toBeInTheDocument();
  });
});
