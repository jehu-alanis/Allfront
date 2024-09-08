import React from 'react';




const ClienteList = ({ clientes, onSelectCliente, onEliminarCliente }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Requisiciones</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200">Nombre</th>
            <th className="py-2 px-4 bg-gray-200">Número de Pedido</th>
            <th className="py-2 px-4 bg-gray-200">Graduación OD</th>
            <th className="py-2 px-4 bg-gray-200">Graduación OI</th>
            <th className="py-2 px-4 bg-gray-200">Tipo de Armazón</th>
            <th className="py-2 px-4 bg-gray-200">Tipo de Mica</th>
            <th className="py-2 px-4 bg-gray-200">Tipo de Reflejo</th>
            <th className="py-2 px-4 bg-gray-200">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="border-b">
              <td className="py-2 px-4">{cliente.nombre}</td>
              <td className="py-2 px-4">{cliente.numeroPedido}</td>
              <td className="py-2 px-4">{cliente.graduacionOD}</td>
              <td className="py-2 px-4">{cliente.graduacionOI}</td>
              <td className="py-2 px-4">{cliente.tipoArmazon}</td>
              <td className="py-2 px-4">{cliente.tipoMica}</td>
              <td className="py-2 px-4">{cliente.tipoReflejo}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => onSelectCliente(cliente)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => onEliminarCliente(cliente.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteList;
