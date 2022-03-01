import { ChangeEvent } from 'react';
import { EntornosDeRed, REDES, Red } from '../../../../../redes';

interface Props {
  cambioDeRed: (red: Red) => void;
  entornoDeRedPorDefecto: EntornosDeRed;
}
export const SelectorDeRed = ({ cambioDeRed, entornoDeRedPorDefecto }: Props) => {
  const redes = [...REDES[entornoDeRedPorDefecto]];

  const eventoDeCambioDeRed = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    const identificadorDeRed = REDES[entornoDeRedPorDefecto].find((chain: Red) => chain.chainId === Number(value));
    if (identificadorDeRed) cambioDeRed(identificadorDeRed);
  };

  return (
    <>
      <select onChange={eventoDeCambioDeRed}>
        {redes &&
          redes.map((red, index) => {
            return (
              <option key={index} value={red.chainId}>
                {' '}
                {red.name}
              </option>
            );
          })}
      </select>
    </>
  );
};
