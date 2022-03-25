import { construirContrato, Contrato } from '../Models/contratos.model';
import { ContratoService } from './contrato.service';

describe('Contrato Service Specs', () => {
  const { getContratos, guardarContratosHoy, getContratoPorBoeId } = ContratoService;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Devuelve una coleccion de contratos a partir de un rango de fechas', async () => {
    const contratoIrrelevante1: Contrato = construirContrato({
      contratoId: 'id-irrelevante1',
      titulo: 'titulo-irrelevante1',
    });
    const contratoIrrelevante2: Contrato = construirContrato({
      contratoId: 'id-irrelevante2',
      titulo: 'titulo-irrelevante2',
    });
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ json: () => [contratoIrrelevante1, contratoIrrelevante2] }));

    const contratos = await getContratos('2021-05-10');
    expect(contratos).toHaveLength(2);
    expect(contratos[0].titulo).toEqual('titulo-irrelevante1');
    expect(contratos[0].contratoId).toEqual('id-irrelevante1');
    expect(contratos[1].titulo).toEqual('titulo-irrelevante2');
    expect(contratos[1].contratoId).toEqual('id-irrelevante2');
  });

  it('Devuelve una coleccion de contratos a partir de una fechas', async () => {
    const contratoIrrelevante: Contrato = construirContrato({
      contratoId: 'id-irrelevante',
      titulo: 'titulo-irrelevante',
    });
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ json: () => [contratoIrrelevante] }));

    const contratos = await getContratos('2021-05-10');
    expect(contratos).toHaveLength(1);
    expect(contratos[0].titulo).toEqual('titulo-irrelevante');
    expect(contratos[0].contratoId).toEqual('id-irrelevante');
  });

  it('Devuelve un contrato en base a un boe-id', async () => {
    const contratoIrrelevante: Contrato = construirContrato({
      contratoId: 'id-irrelevante',
    });
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ json: () => contratoIrrelevante }));

    const contrato = await getContratoPorBoeId('id-irrelevante');

    expect(contrato.contratoId).toEqual('id-irrelevante');
  });

  it('Devuelve 404 si el id de contrato no existe', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject({ message: 'El contrato no existe', statusCode: 404 }));

    const contrato = await getContratoPorBoeId('id-inexistente');

    expect(contrato).toEqual({ message: 'El contrato no existe', statusCode: 404 });
  });

  it('Devuelve 400 si los parametros son inválidos', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject({ message: 'Error', statusCode: 400 }));

    const contratos = await getContratos('');
    expect(contratos).toEqual({ message: 'Error', statusCode: 400 });
  });

  it('Devuelve numero de contratos guardados', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({ json: () => ({ itemsGuarados: 40 }) }));

    const items = await guardarContratosHoy();
    expect(items).toEqual({ itemsGuarados: 40 });
  });
});
