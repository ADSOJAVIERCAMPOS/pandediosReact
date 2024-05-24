import React from "react";
import FormGalpon from "../elementos/FormGalpon";
import TableGalpon from "../elementos/TableGalpon";
import Calendar from "../elementos/Calendar"

const Home = () => {
  return (
    <>
      <section className="default">
      <h1 className="mt-2"> Pedidos </h1>
      <Calendar />
      <FormGalpon/>
      <h1>Pedidos activos</h1>
      <TableGalpon/>
      </section>
    </>
  );
};
export default Home;