import { ChangeEvent, useState } from 'react';
import { store } from '../../../../Conectores/metamask';
import { useRedes } from '../../../../Hooks/useRedes';
import { Red } from '../../../../Models/redes.model';
import { Selector, SelectorWrapper } from './SelectorDeCadena.styled';

interface Props {
  cambioDeRed: (red: Red) => void;
}

export const SelectorDeRed = ({ cambioDeRed }: Props) => {
  const { getState } = store;
  const redesDisponibles = useRedes();
  const [currentId] = useState(getState().chainId);

  const eventoDeCambioDeRed = (event: ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    const red = redesDisponibles.find((chain: Red) => chain.chainId === Number(value));
    if (red) cambioDeRed(red);
  };

  return (
    <SelectorWrapper>
      <label> Cambiar de red: </label>
      <Selector onChange={eventoDeCambioDeRed} defaultValue={currentId}>
        {redesDisponibles &&
          redesDisponibles.map((red, index) => {
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
