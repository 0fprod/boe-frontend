export interface Institucion {
  nombre: string;
  nif: string;
  telefono: string;
  email: string;
  web: string;
  tipoActividad: string;
  actividad: string;
}

export interface Beneficiario {
  nombre: string;
  nif: string;
  esPyme: boolean;
  lote: string;
  coste: number;
  descripcion: string;
}

export interface DetallesDeContrato {
  institucion: Institucion;
  beneficiarios: Beneficiario[];
  descripcion: string;
}

export interface Contrato {
  contratoId: string;
  fechaPub: string;
  titulo: string;
  urlPdf: string;
  detalles: DetallesDeContrato;
}
