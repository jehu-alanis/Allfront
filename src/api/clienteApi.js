import axios from 'axios';

// Configuración base de Axios para conectarse a la API
const API_URL = 'http://localhost:3000/clientes';

export const obtenerClientes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los clientes:', error);
    throw error;
  }
};

export const crearCliente = async (cliente) => {
  try {
    const response = await axios.post(API_URL, cliente);
    return response.data;
  } catch (error) {
    console.error('Error al crear el cliente:', error);
    throw error;
  }
};

export const actualizarCliente = async (id, cliente) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, cliente);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
    throw error;
  }
};

export const eliminarCliente = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el cliente:', error);
    throw error;
  }
};
