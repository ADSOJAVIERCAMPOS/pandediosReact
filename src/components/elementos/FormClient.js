import React, { useState } from 'react';
import api from '../api'

const FormClient = ({ client, onSave }) => {
  const [nombre, setNombre] = useState(client ? client.nombre : '');
  const [apellido, setApellido] = useState(client ? client.apellido : '');
  const [correo, setCorreo] = useState(client ? client.correo : '');
  const [telefono, setTelefono] = useState(client ? client.telefono : '');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (client) {
      await api.put(`/client/${client.id}`, { nombre, apellido, correo, telefono });
    } else {
      const response = await api.post('/client', { nombre, apellido, correo, telefono });
      setNombre('');
      setApellido('');
      setCorreo('');
      setTelefono('');
      onSave(response.data);
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          className='input m-1'
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </label>
      <br />
      <label>
        Apellido:
        <input
          className='input m-1'
          type="text"
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
        />
      </label>
      <br />
      <label>
        Correo:
        <input
          className='input m-1'
          type="email"
          value={correo}
          onChange={(event) => setCorreo(event.target.value)}
        />
      </label>
      <br />
      <label>
        Telefono:
        <input
          className='input m-1'
          type="text"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </label>
      {client ? (
        <button className='button btn-dark w-100' type="submit">Actualizar</button>
      ) : (
        <button className='button btn-dark w-100' type="submit">Guardar</button>
      )}
    </form>
  );
};

export default FormClient;