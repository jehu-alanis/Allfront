import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ClienteList from './components/Cliente/ClienteList';
import ClienteForm from './components/Cliente/ClienteForm';
import { eliminarCliente, obtenerClientes } from './api/clienteApi';
import Login from './components/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebaseConfig';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [clientes, setClientes] = useState([]);

  //autenticacion
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        cargarClientes();
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Cargar clientes al montar el componente
  useEffect(() => {
    cargarClientes();
  }, []);

  const cargarClientes = async () => {
    try {
      const data = await obtenerClientes();
      setClientes(data);
    } catch (error) {
      console.error('Error al cargar los clientes:', error);
    }
  };

  const handleSelectCliente = (cliente) => {
    setClienteSeleccionado(cliente);
  };

  const handleClienteGuardado = () => {
    setClienteSeleccionado(null); // Limpiar el cliente seleccionado después de guardar
    cargarClientes(); // Recargar la lista de clientes después de guardar
  };

  const handleEliminarCliente = async (id) => {
    try {
      await eliminarCliente(id);
      cargarClientes(); // Recargar la lista de clientes después de eliminar
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
       <h1 className="text-3xl font-bold mb-4">Gestión de Clientes</h1>
      <ClienteForm clienteSeleccionado={clienteSeleccionado} onClienteGuardado={handleClienteGuardado} />
      <ClienteList clientes={clientes} onSelectCliente={handleSelectCliente} onEliminarCliente={handleEliminarCliente} />
    </div>
  );
};

export default App;
