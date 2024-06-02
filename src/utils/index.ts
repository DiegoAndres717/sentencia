import { Delito } from "@/types";

export const delitos: Delito[] = [
  // Delitos existentes
  {
    nombreDelito: "Homicidio",
    codigoDelito: "123",
    penaBaseMinima: 10,
    penaBaseMedia: 15,
    penaBaseMaxima: 20,
    tipoDelito: "Violencia Doméstica", // Asigna el tipo de delito
    gravedad: "Muy Grave" // Asigna la gravedad
  },
  {
    nombreDelito: "Robo",
    codigoDelito: "456",
    penaBaseMinima: 5,
    penaBaseMedia: 8,
    penaBaseMaxima: 12,
    tipoDelito: "Delitos contra la Propiedad",
    gravedad: "Grave"
  },
  {
    nombreDelito: "Fraude",
    codigoDelito: "789",
    penaBaseMinima: 2,
    penaBaseMedia: 4,
    penaBaseMaxima: 6,
    tipoDelito: "Delitos contra la Propiedad",
    gravedad: "Grave"
  },
  // Crimen organizado
  {
    nombreDelito: "Narcotráfico",
    codigoDelito: "1001",
    penaBaseMinima: 12,
    penaBaseMedia: 18,
    penaBaseMaxima: 25,
    tipoDelito: "Crimen Organizado",
    gravedad: "Muy Grave"
  },
  {
    nombreDelito: "Lavado de Dinero",
    codigoDelito: "1002",
    penaBaseMinima: 8,
    penaBaseMedia: 12,
    penaBaseMaxima: 16,
    tipoDelito: "Crimen Organizado",
    gravedad: "Grave"
  },
  {
    nombreDelito: "Extorsión",
    codigoDelito: "1003",
    penaBaseMinima: 6,
    penaBaseMedia: 9,
    penaBaseMaxima: 12,
    tipoDelito: "Crimen Organizado",
    gravedad: "Grave"
  },
  {
    nombreDelito: "Tráfico de Armas",
    codigoDelito: "1004",
    penaBaseMinima: 10,
    penaBaseMedia: 15,
    penaBaseMaxima: 20,
    tipoDelito: "Crimen Organizado",
    gravedad: "Grave"
  },
  // Violencia doméstica
  {
    nombreDelito: "Lesiones Personales",
    codigoDelito: "2001",
    penaBaseMinima: 1,
    penaBaseMedia: 3,
    penaBaseMaxima: 5,
    tipoDelito: "Violencia Doméstica",
    gravedad: "Leve"
  },
  {
    nombreDelito: "Maltrato Infantil",
    codigoDelito: "2002",
    penaBaseMinima: 4,
    penaBaseMedia: 6,
    penaBaseMaxima: 8,
    tipoDelito: "Violencia Doméstica",
    gravedad: "Grave"
  },
  {
    nombreDelito: "Violencia de Género",
    codigoDelito: "2003",
    penaBaseMinima: 3,
    penaBaseMedia: 5,
    penaBaseMaxima: 7,
    tipoDelito: "Violencia Doméstica",
    gravedad: "Grave"
  },
  // Crimen informático
  {
    nombreDelito: "Delitos Cibernéticos",
    codigoDelito: "3001",
    penaBaseMinima: 2,
    penaBaseMedia: 4,
    penaBaseMaxima: 6,
    tipoDelito: "Crimen Informático",
    gravedad: "Grave"
  },
  {
    nombreDelito: "Fraude Electrónico",
    codigoDelito: "3002",
    penaBaseMinima: 3,
    penaBaseMedia: 5,
    penaBaseMaxima: 7,
    tipoDelito: "Crimen Informático",
    gravedad: "Grave"
  },
  {
    nombreDelito: "Robo de Identidad",
    codigoDelito: "3003",
    penaBaseMinima: 4,
    penaBaseMedia: 6,
    penaBaseMaxima: 8,
    tipoDelito: "Crimen Informático",
    gravedad: "Grave"
  },
  // Delitos contra la propiedad
  {
    nombreDelito: "Hurto",
    codigoDelito: "4001",
    penaBaseMinima: 1,
    penaBaseMedia: 2,
    penaBaseMaxima: 4,
    tipoDelito: "Delitos contra la Propiedad",
    gravedad: "Leve"
  },
  {
    nombreDelito: "Estafa",
    codigoDelito: "4002",
    penaBaseMinima: 2,
    penaBaseMedia: 4,
    penaBaseMaxima: 6,
    tipoDelito: "Delitos contra la Propiedad",
    gravedad: "Grave"
  }
];