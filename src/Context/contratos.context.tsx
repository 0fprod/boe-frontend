import React, { useState } from 'react';
import { Contrato } from '../Models/contratos.model';
import { DatosGrafico } from '../Models/datos.model';
import { formatearFecha } from '../utils/utils';

interface Query {
  inicio: string;
  final?: string;
}

interface EstadisticasState {
  pymes: DatosGrafico;
  actividad: DatosGrafico;
  top10: DatosGrafico;
}

interface Ctx {
  query: Query;
  contratos: Contrato[];
  estadisticas: Partial<EstadisticasState>;
  actualizarQuery: (q: Query) => void;
  actualizarContratos: (c: Contrato[]) => void;
  actualizarEstadisticas: (e: Partial<EstadisticasState>) => void;
}

export const AppContext = React.createContext<Ctx>({
  query: {
    inicio: formatearFecha(new Date().toISOString()),
  },
  contratos: [],
  estadisticas: {
    pymes: { labels: [], datasets: [] },
    top10: { labels: [], datasets: [] },
    actividad: { labels: [], datasets: [] },
  },
  actualizarQuery: (q: Query) => {},
  actualizarContratos: (c: Contrato[]) => {},
  actualizarEstadisticas: (e: Partial<EstadisticasState>) => {},
});

export const StateProvider: React.FC<{}> = ({ children }) => {
  const [query, setQuery] = useState<Query>({
    inicio: formatearFecha(new Date().toISOString()),
  });
  const [contratos, setContratos] = useState<Contrato[]>([]);
  const [estadisticas, setEstadisticas] = useState<Partial<EstadisticasState>>({
    pymes: { labels: [], datasets: [] },
    top10: { labels: [], datasets: [] },
    actividad: { labels: [], datasets: [] },
  });

  return (
    <AppContext.Provider
      value={{
        query,
        contratos,
        estadisticas,
        actualizarQuery: setQuery,
        actualizarContratos: setContratos,
        actualizarEstadisticas: setEstadisticas,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
