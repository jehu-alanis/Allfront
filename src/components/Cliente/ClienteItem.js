import React from 'react';

const ClienteItem = ({ cliente, onDelete, onSelect }) => {
  return (
    <div>
      <h3>{cliente.nombre}</h3>
      <p>Número de Pedido: {cliente.numeroPedido}</p>
      <p>Graduación OD: {cliente.graduacionOD}</p>
      <p>Graduación OI: {cliente.graduacionOI}</p>
      <p>Tipo de Armazón: {cliente.tipoArmazon}</p>
      <p>Tipo de Mica: {cliente.tipoMica}</p>
      <p>Tipo de Reflejo: {cliente.tipoReflejo}</p>
      <button onClick={() => onSelect(cliente)}>Editar</button>
      <button onClick={() => onDelete(cliente.id)}>Eliminar</button>
    </div>
  );
};

export default ClienteItem;
