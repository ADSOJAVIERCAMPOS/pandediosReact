import React, { useState } from 'react';
import api from '../api'

const FormInventario = ({ productos, onSave }) => {
  const [producto, setProducto] = useState(productos ? productos.nombre_producto : '');
  const [descripcion, setDescripcion] = useState(productos ? productos.descripcion_producto : '');
  const [valor, setValor] = useState(productos ? productos.valor : '');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (productos) {
      await api.put(`/producto/${producto.id}`, { producto, descripcion, valor });
    } else {
      const response = await api.post('/producto', {  producto, descripcion, valor });
      setProducto('');
      setDescripcion('');
      setValor('');
      onSave(response.data);
    }
  };
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Producto:
        <input
          type="text"
          className='input m-1'
          value={producto}
          onChange={(event) =>setProducto(event.target.value)}
        />
      </label>
      <br />
      <label>
        Descripcion:
        <input
          className='input m-1'
          type="text"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
        />
      </label>
      <br />
      <label>
        Valor:
        <input
          className='input m-1'
          type="text"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
      </label>
      <br />
      {productos ? (
        <button className='button btn-dark w-100' type="submit">Actualizar</button>
      ) : (
        <button className='button btn-dark w-100' type="submit">Guardar</button>
      )}
    </form>
  );
};

export default FormInventario;