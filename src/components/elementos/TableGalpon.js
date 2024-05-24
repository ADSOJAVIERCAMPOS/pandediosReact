import React, { useEffect, useState } from 'react';
import api from '../api'

const TableGalpon = () => {
  const [pedidos, setPedido] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/pedido');
      setPedido(response.data);
    };

    fetchData();
  }, []);

  return (
    <table className='table '>
      <thead>
        <tr>
          <th>Id</th>
          <th>Cod cliente</th>
          <th>fecha entrega</th>
          <th>valor pedido</th>
          <th>codigo producto</th>
          <th>cantidad producto</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.map((pedido) => (
          <tr key={pedido.id}>
            <td>{pedido.id}</td>
            <td>{pedido.cod_cliente}</td>
            <td>{pedido.fecha_entrega}</td>
            <td>{pedido.valor_pedido}</td>
            <td>{pedido.cod_producto}</td>
            <td>{pedido.cantidad_producto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableGalpon;