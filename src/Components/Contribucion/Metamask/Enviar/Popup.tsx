import { useContext } from 'react';
import { RedContext } from '../../../../Context/red.context';
import { Red } from '../../../../Models/redes.model';
import { StyledPopUp } from './Popup.styled';

interface Props {
  hash: string;
}

export const PopUp = ({ hash }: Props) => {
  const redActual = useContext<Red | undefined>(RedContext);
  const blockScanner = redActual ? `${redActual.explorer}tx/${hash}` : '';

  return (
    <>
      { !!hash && (
        <StyledPopUp>
          Enviado!
          <br />
          Hash de la transacción:{' '}
          <a href={blockScanner} target="_blank" rel="noopener noreferrer">
            {hash}
          </a>
        </StyledPopUp>
      )}
    </>
  );
};
