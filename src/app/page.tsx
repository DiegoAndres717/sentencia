import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container-fluid mx-auto px-4 py-16 w-[50%] shadow-md">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Sentencia.co: Calcula la Pena en Colombia
      </h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Sentencia.co es una herramienta gratuita que te ayuda a determinar la pena
        mínima, media y máxima que puede imponerse a un delito en Colombia,
        considerando agravantes y atenuantes. 
      </p>
      <Link href="/calcular">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Calcular Pena
        </button>
      </Link>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contáctanos</h2>
        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Nombre" 
            required 
            className="px-4 py-2 border rounded focus:outline-none focus:ring-blue-500"
          />
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            required 
            className="px-4 py-2 border rounded focus:outline-none focus:ring-blue-500"
          />
          <textarea 
            placeholder="Mensaje" 
            required 
            className="px-4 py-2 border rounded focus:outline-none focus:ring-blue-500 resize-none"
          />
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