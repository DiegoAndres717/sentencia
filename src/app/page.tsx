import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-16 w-full">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Sentencia.co: Calcula la Pena en Colombia
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Sentencia.co es una herramienta gratuita que te ayuda a determinar la
        pena mínima, media y máxima que puede imponerse a un delito en Colombia,
        considerando agravantes y atenuantes.
      </p>
      <Link href="/calcular" className="inline-block">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Calcular Pena
        </button>
      </Link>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Contáctanos
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu nombre"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correo" className="block text-gray-700 font-bold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="correo"
              placeholder="Tu correo electrónico"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              placeholder="Tu mensaje"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;