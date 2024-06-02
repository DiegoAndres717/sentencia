

export interface Pena {
  penaMinima: number;
  penaMedia: number;
  penaMaxima: number;
  rangoPena: string;
}
export interface Delito {
    nombreDelito: string;
    codigoDelito: string;
    penaBaseMinima: number;
    penaBaseMedia: number;
    penaBaseMaxima: number;
    tipoDelito: string;
    gravedad: string;
    definicionLegal?: string;
    ejemplos?: string;
    jurisprudencia?: string;
  }
  
  export interface Agravante {
    nombreAgravante: string;
    aumentoPena: number;
  }
  
  export interface Atenuante {
    nombreAtenuante: string;
    reduccionPena: number;
  }