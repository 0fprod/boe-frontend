import React from 'react';
import { InformacionWrapper } from './Informacion.styled';

export const Informacion: React.FC<{}> = () => {
  return (
    <InformacionWrapper>
      <p>
        Este es un proyecto con el objetivo de mostrar más fácilmente resúmenes sobre en qué se gasta el dinero público el estado, basado en
        las emisiones del BOE cada día. Todos los documentos tienen como origen la{' '}
        <strong>Agencia Estatal del Boletín Oficial del Estado</strong> y la información se extrae específicamente la sección 5-A dónde
        anuncian las formalizaciones de los contratos del sector público.
      </p>
      <p>
        En esta web no se guarda ningún dato del usuario visitante, y además se compromete a respetar las reglas de reutilización definidas
        en este enlace{' '}
        <a rel="noreferrer" href="https://www.boe.es/informacion/aviso_legal/index.php#reutilizacion" target="_blank">
          https://www.boe.es/informacion/aviso_legal/index.php#reutilizacion
        </a>
        .
      </p>
      <p>Funcionamiento:</p>
      <ul>
        <li>
          - Cada día a las 7:00 UTC se ataca a los datos abiertos que proporciona la web{' '}
          <a rel="noreferrer" href="https://www.boe.es/datosabiertos/">
            https://www.boe.es/datosabiertos/
          </a>
          .
        </li>
        <li> - Se extraen las formalizaciones de contratos en formato XML.</li>
        <li> - Dicha información se organiza y se guarda en una base de datos en formato JSON. </li>
        <li> - Esta web obtiene la información de la base de datos para graficarla.</li>
      </ul>
      <p>
        El código del proyecto lo pueden ver en github, si quieren colaborar o tienes alguna idea estos son los repositorios del{' '}
        <a href="https://github.com/franjpr/boe-backend">servidor</a> y del <a href="https://github.com/franjpr/boe-frontend">cliente</a>{' '}
        por si quieres abrir alguna pull-request o lo que sea.
      </p>
    </InformacionWrapper>
  );
};
