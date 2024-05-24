import React, { useEffect, useState } from 'react';
import api from '../api'

const TableInventario = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/producto');
      setProductos(response.data);
    };

    fetchData();
  }, []);

  return (
    <table className='table table-bordered table-borderless table-responsive ms-2 me-2 mt-2'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre Prodcucto</th>
          <th>Descripcion producto</th>
          <th>Valor producto</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.producto}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInventario;