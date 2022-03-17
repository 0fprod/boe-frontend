import { useContext } from 'react';
import { MetamaskContext } from '../../../../Context/metamask.context';
import { StyledPopUp } from './Popup.styled';

interface Props {
  hash: string;
}

export const PopUp = ({ hash }: Props) => {
  const {red} = useContext(MetamaskContext);
  const blockScanner = red ? `${red.explorer}tx/${hash}` : '';

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
