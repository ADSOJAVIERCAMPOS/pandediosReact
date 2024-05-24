import React from "react";
import ImgMain from '../elementos/Imgmain'

const CardAdmin = () => { 
  return (
    <>
      <div className="card rounded-0 border-0 ms-2 m-1">
        <div className="card-head">
        <ImgMain />
        </div>
        <div className="card-body text-dark">
          <h1 className="card-title fs-4 text-center">Bienvenido</h1>
          <p className="card-text text-center">Registrarse</p>
        </div>
      </div>
    </>
  );
};
export default CardAdmin;


