// tipos.ts
export interface Delito {
    nombreDelito: string;
    codigoDelito: string;
    penaBaseMinima: number;
    penaBaseMedia: number;
    penaBaseMaxima: number;
  }
  
  export interface Agravante {
    nombreAgravante: string;
    aumentoPena: number;
  }
  
  export interface Atenuante {
    nombreAtenuante: string;
    reduccionPena: number;
  }