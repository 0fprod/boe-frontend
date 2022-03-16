import { ChangeEvent, useEffect, useState } from 'react';
import { store } from '../../../../Conectores/metamask';
import { EntornosDeRed, Red } from '../../../../Models/redes.model';
import { REDES } from '../../../../utils/redes';
import { Selector, SelectorWrapper } from './SelectorDeCadena.styled';

interface Props {
  cambioDeRed: (red: Red) => void;
  entornoDeRedPorDefecto: EntornosDeRed;
}
export const SelectorDeRed = ({ cambioDeRed, entornoDeRedPorDefecto }: Props) => {
  const { getState } = store;
  const redes = [...REDES[entornoDeRedPorDefecto]];
  const [currentId] = useState(getState().chainId);

  const eventoDeCambioDeRed = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    const identificadorDeRed = REDES[entornoDeRedPorDefecto].find((chain: Red) => chain.chainId === Number(value));
    if (identificadorDeRed) cambioDeRed(identificadorDeRed);
  };

  return (
    <SelectorWrapper>
      <label> Cambiar de red: </label>
      <Selector onChange={eventoDeCambioDeRed} defaultValue={currentId}>
        {redes &&
          redes.map((red, index) => {
            return (
              <option key={index} value={red.chainId}>
                {red.name}
              </option>
            );
          })}
      </Selector>
    </SelectorWrapper>
  );
};
