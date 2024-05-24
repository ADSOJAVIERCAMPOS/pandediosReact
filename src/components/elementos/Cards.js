import React, { useEffect, useState } from 'react';
import CardProducto from "./CardProducto";
import api from '../api'

const Cards = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/producto');
      setProductos(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        {productos.map((producto) => (
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-4"
            key={producto.id}
          >
            <CardProducto
              title={producto.producto}
              doc={producto.descripcion}
              text={producto.valor}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Cards;