import { ChangeEvent, useState } from 'react';
import { store } from '../../../../Conectores/metamask';
import { Red } from '../../../../Models/redes.model';
import { REDES } from '../../../../utils/redes';
import { Selector, SelectorWrapper } from './SelectorDeCadena.styled';

interface Props {
  cambioDeRed: (red: Red) => void;
}

export const SelectorDeRed = ({ cambioDeRed }: Props) => {
  const { getState } = store;
  const entornoDeRedPorDefecto = process.env.NEXT_PUBLIC_CHAIN_ENV === 'testnet' ? 'testnet' : 'mainnet';
  const redes = [...REDES[entornoDeRedPorDefecto]];
  const [currentId] = useState(getState().chainId);

  const eventoDeCambioDeRed = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    const red = REDES[entornoDeRedPorDefecto].find((chain: Red) => chain.chainId === Number(value));
    if (red) cambioDeRed(red);
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
