import { construirBeneficiario } from '../Models/contratos.model';
import { calcularTotal, formatearCoste, formatearFecha } from './utils';

describe('Utils Specs', () => {
  it('Formatea un dígito añadiendole la moneda y separadores correctos', () => {
    const nonBreakableSpace = '\xa0'; // Esto es lo que le mete la libreria de Intl.NumberFormat
    expect(formatearCoste(100)).toEqual(`100,00${nonBreakableSpace}€`);
    expect(formatearCoste(1000)).toEqual(`1.000,00${nonBreakableSpace}€`);
    expect(formatearCoste(10000)).toEqual(`10.000,00${nonBreakableSpace}€`);
    expect(formatearCoste(-1)).toEqual(`-1,00${nonBreakableSpace}€`);
  });

  it('Formatea una fecha en ISO a formato corto aaaa-mm-dd', () => {
    expect(formatearFecha('2013-08-03T02:00:00Z')).toEqual('2013-08-03');
    expect(formatearFecha('2013/08/03')).toEqual('2013-08-03');
    expect(formatearFecha('2013-08-03')).toEqual('2013-08-03');
    expect(formatearFecha('20-08-2003')).toEqual('-');
  });

  it('Calcula el total de costes entre los beneficiarios', () => {
    const beneficiarios1 = [construirBeneficiario({ coste: 10 }), construirBeneficiario({}), construirBeneficiario({ coste: 10 })];
    const beneficiarios2 = [construirBeneficiario({ coste: 10 }), construirBeneficiario({ coste: 10 })];
    expect(calcularTotal(beneficiarios1)).toEqual(20);
    expect(calcularTotal(beneficiarios2)).toEqual(20);
  });
});
