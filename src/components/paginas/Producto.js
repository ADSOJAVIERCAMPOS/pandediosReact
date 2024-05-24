import React from "react";
import FormInventario from "../elementos/FormInventario";
import TableInventario from "../elementos/TableInventario";
import Cards from "../elementos/Cards"

const Producto = () => {
  return (
    <>
      <section className="default">
      <h1> Agregar producto </h1>
      <FormInventario/>
      <h1>Productos</h1>
      <Cards />
      <TableInventario/>
      </section>
    </>
  );
};
export default Producto;