import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Calendario } from './Calendario';
describe('Calendario specs', () => {
  it('Emite una búsqueda con las 2 fechas seleccionadas', () => {
    const buscarStub = jest.fn();
    const { getByLabelText, getByText } = render(<Calendario obtenerContratosPorFecha={buscarStub} />);
    const fechaInicialInput = getByLabelText('fecha inicial');
    const fechaFinalInput = getByLabelText('fecha final');
    const buscarBtn = getByText('Buscar!');

    user.type(fechaInicialInput, '2021-05-01');
    user.type(fechaFinalInput, '2021-05-10');
    user.click(buscarBtn);

    expect(buscarStub).toHaveBeenCalled();
    expect(buscarStub).toHaveBeenCalledWith('2021-05-01', '2021-05-10');
  });

  it('Emite una búsqueda con la 1 fecha (inicio) seleccionada', () => {
    const buscarStub = jest.fn();
    const { getByLabelText, getByText } = render(<Calendario obtenerContratosPorFecha={buscarStub} />);
    const fechaInicialInput = getByLabelText('fecha inicial');
    const buscarBtn = getByText('Buscar!');

    user.type(fechaInicialInput, '2021-05-01');
    user.click(buscarBtn);

    expect(buscarStub).toHaveBeenCalled();
    expect(buscarStub).toHaveBeenCalledWith('2021-05-01', '');
  });

  it('No permite que la fecha final sea anterior a la inicial', () => {
    const buscarStub = jest.fn();
    const { getByLabelText, getByText } = render(<Calendario obtenerContratosPorFecha={buscarStub} />);
    const fechaInicialInput = getByLabelText('fecha inicial');
    const fechaFinalInput = getByLabelText('fecha final');
    const buscarBtn = getByText('Buscar!');

    user.type(fechaInicialInput, '2021-05-01');
    user.type(fechaFinalInput, '2021-04-10');
    user.click(buscarBtn);

    expect(buscarStub).toHaveBeenCalled();
    expect(buscarStub).toHaveBeenCalledWith('2021-05-01', '2021-05-01');
  });

  it('No permite seleccion de fechas anteriores al año 2021', () => {
    const { getByLabelText } = render(<Calendario obtenerContratosPorFecha={jest.fn} />);
    const fechaInicialInput = getByLabelText('fecha inicial');
    const fechaFinalInput = getByLabelText('fecha final');

    expect(fechaInicialInput).toHaveAttribute('min', '2021-01-01');
    expect(fechaFinalInput).toHaveAttribute('min', '2021-01-01');
  });
});
