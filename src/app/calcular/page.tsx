"use client";
import { Pena } from '@/types';
import { delitos } from '@/utils';
import React, { useState } from 'react';

type Agravante = string; 
type Atenuante = string;

const Calculate = () => {
  const [selectedDelito, setSelectedDelito] = useState('');
  const [agravantes, setAgravantes] = useState<Agravante[]>([]);
  const [atenuantes, setAtenuantes] = useState<Atenuante[]>([]);
  const [resultadoPena, setResultadoPena] = useState<Pena | null>(null); 
  
  const handleDelitoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDelito(event.target.value);
  };

  const handleAgravantesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setAgravantes([...agravantes, event.target.value as Agravante]);
    } else {
      setAgravantes(agravantes.filter((a) => a !== event.target.value));
    }
  };

  const handleAtenuantesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setAtenuantes([...atenuantes, event.target.value]);
    } else {
      setAtenuantes(atenuantes.filter((a) => a !== event.target.value));
    }
  };

  // Buscar el delito en la lista
  const delitoSeleccionado = delitos.find((d) => d.nombreDelito === selectedDelito);

  const calcularPena = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Verificar si se seleccionó un delito
    if (!delitoSeleccionado) {
      alert("Por favor, seleccione un delito.");
      return;
    }

    // Calcular la pena
    let penaMinima = delitoSeleccionado.penaBaseMinima;
    let penaMedia = delitoSeleccionado.penaBaseMedia;
    let penaMaxima = delitoSeleccionado.penaBaseMaxima;

    // Aplicar agravantes
    agravantes.forEach((agravante) => {
      if (agravante === "armas") {
        penaMinima += 5;
        penaMedia += 5;
        penaMaxima += 5;
      } else if (agravante === "crueldad") {
        penaMinima += 3;
        penaMedia += 3;
        penaMaxima += 3;
      }
      // ... (Agregar más agravantes)
    });

    // Aplicar atenuantes
    atenuantes.forEach((atenuante) => {
      if (atenuante === "confesion") {
        penaMinima -= 2;
        penaMedia -= 2;
        penaMaxima -= 2;
      } else if (atenuante === "arrepentimiento") {
        penaMinima -= 1;
        penaMedia -= 1;
        penaMaxima -= 1;
      }
      // ... (Agregar más atenuantes)
    });
    // Determinar el rango de la pena
    let rangoPena: "Mínima" | "Media" | "Máxima" = "Mínima";
    if (penaMedia <= penaMaxima / 2) {
      rangoPena = "Mínima";
    } else if (penaMedia <= penaMaxima * 0.8) {
      rangoPena = "Media";
    } else {
      rangoPena = "Máxima";
    }
    // Aplicar límites
    penaMinima = Math.max(penaMinima, 0);
    penaMaxima = Math.min(penaMaxima, delitoSeleccionado.penaBaseMaxima);

    setResultadoPena({ penaMinima, penaMedia, penaMaxima, rangoPena });
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Calcular Pena en Colombia
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="flex flex-col space-y-6">
            <div className="form-group">
              <label htmlFor="delito" className="block text-gray-700 font-bold mb-2">
                Delito:
              </label>
              <select
                id="delito"
                value={selectedDelito}
                onChange={handleDelitoChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Seleccione un delito</option>
                {delitos.map((delito) => (
                  <option key={delito.codigoDelito} value={delito.nombreDelito}>
                    {delito.nombreDelito}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="agravantes" className="block text-gray-700 font-bold mb-2">
                Agravantes:
              </label>
              <div className="space-y-2 space-x-2">
                <input
                  type="checkbox"
                  id="agravantes1"
                  value="armas"
                  onChange={handleAgravantesChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor="agravantes1" className="ml-3 text-gray-700">
                  Uso de armas
                </label>
                <input
                  type="checkbox"
                  id="agravantes2"
                  value="crueldad"
                  onChange={handleAgravantesChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor="agravantes2" className="ml-3 text-gray-700">
                  Crueldad
                </label>
                {/* Agrega más opciones de agravantes */}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="atenuantes" className="block text-gray-700 font-bold mb-2">
                Atenuantes:
              </label>
              <div className="space-y-2 space-x-2">
                <input
                  type="checkbox"
                  id="atenuantes1"
                  value="confesion"
                  onChange={handleAtenuantesChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor="atenuantes1" className="ml-3 text-gray-700">
                  Confesión
                </label>
                <input
                  type="checkbox"
                  id="atenuantes2"
                  value="arrepentimiento"
                  onChange={handleAtenuantesChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <label htmlFor="atenuantes2" className="ml-3 text-gray-700">
                  Arrepentimiento
                </label>
                {/* Agrega más opciones de atenuantes */}
              </div>
            </div>

            <button
              onClick={calcularPena}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Calcular Pena
            </button>
          </form>

          <div className="results mt-8 space-y-4">
            {resultadoPena && (
                <div className="bg-white p-6 rounded-lg shadow-md"> {/* Contenedor con estilo */}
                <div 
                    className={`text-center text-lg font-semibold mb-4 rounded-md py-2 px-4 
                                ${resultadoPena.rangoPena === "Mínima"
                                    ? "bg-green-500 text-white"
                                    : resultadoPena.rangoPena === "Media"
                                    ? "bg-yellow-500 text-white"
                                    : "bg-red-500 text-white"
                                }`}
                >
                    Rango de pena: {resultadoPena.rangoPena}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Cuadrícula responsiva */}
                    {
                    [
                        { label: "Mínima", valor: resultadoPena.penaMinima },
                        { label: "Media", valor: resultadoPena.penaMedia },
                        { label: "Máxima", valor: resultadoPena.penaMaxima }
                    ].map((pena, index) => (
                        <div
                        key={index}
                        className={`p-4 rounded-md text-lg font-semibold 
                                    ${pena.label === "Mínima" && resultadoPena.rangoPena === "Mínima" ? "bg-green-200 text-green-800" : 
                                    pena.label === "Media" && resultadoPena.rangoPena === "Media" ? "bg-yellow-200 text-yellow-800" :
                                    pena.label === "Máxima" && resultadoPena.rangoPena === "Máxima" ? "bg-red-200 text-red-800" :
                                    "bg-gray-100 text-gray-800"
                                    }`}
                        >
                        {pena.label}: {pena.valor} años
                        </div>
                    ))
                    }
                </div>
                </div>
            )}
            </div>
        </div>

        <p className="text-gray-500 text-center mt-4">
          Esta herramienta es informativa. Se recomienda consultar con un abogado para
          asesoramiento legal.
        </p>
      </div>
    </div>
  );
};

export default Calculate;