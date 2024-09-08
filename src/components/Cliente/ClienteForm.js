import React, { useState, useEffect } from 'react';
import { crearCliente, actualizarCliente } from '../../api/clienteApi';

const ClienteForm = ({ clienteSeleccionado, onClienteGuardado }) => {
  const [cliente, setCliente] = useState({
    nombre: '',
    numeroPedido: '',
    graduacionOD: '',
    graduacionOI: '',
    tipoArmazon: '',
    tipoMica: '',
    tipoReflejo: ''
  });

  useEffect(() => {
    if (clienteSeleccionado) {
      setCliente(clienteSeleccionado);
    }
  }, [clienteSeleccionado]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (cliente.id) {
        await actualizarCliente(cliente.id, cliente);
      } else {
        await crearCliente(cliente);
      }
      onClienteGuardado();
      setCliente({
        nombre: '',
        numeroPedido: '',
        graduacionOD: '',
        graduacionOI: '',
        tipoArmazon: '',
        tipoMica: '',
        tipoReflejo: ''
      });
    } catch (error) {
      console.error('Error al guardar el cliente:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={cliente.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input type="number" name="numeroPedido" value={cliente.numeroPedido} onChange={handleChange} placeholder="Número de Pedido" required />
      <input type="text" name="graduacionOD" value={cliente.graduacionOD} onChange={handleChange} placeholder="Graduación Ojo Derecho" required />
      <input type="text" name="graduacionOI" value={cliente.graduacionOI} onChange={handleChange} placeholder="Graduación Ojo Izquierdo" required />
      <input type="text" name="tipoArmazon" value={cliente.tipoArmazon} onChange={handleChange} placeholder="Tipo de Armazón" required />
      <input type="text" name="tipoMica" value={cliente.tipoMica} onChange={handleChange} placeholder="Tipo de Mica" required />
      <input type="text" name="tipoReflejo" value={cliente.tipoReflejo} onChange={handleChange} placeholder="Tipo de Reflejo" required />
      <button type="submit">{cliente.id ? 'Actualizar Cliente' : 'Agregar Cliente'}</button>
    </form>
  );
};

export default ClienteForm;
