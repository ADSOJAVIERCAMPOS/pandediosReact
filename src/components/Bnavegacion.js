import React, { useState, useRef, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./paginas/Home";
import Admin from "./paginas/Admin";
import Pedido from "./paginas/Pedido";
import Producto from "./paginas/Producto";
import { MdOutlineLegendToggle } from "react-icons/md";
import logo from '../LogotipoPandedios.png'

const Bnavegacion = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navRef = useRef(null);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar ref={navRef}>
          <NavbarBrand href="/" className="me-auto text-light">
            <Link className="container d-flex text-light w-100 link" to="/">
            <img
                alt="Pan de Dios"
                src={logo}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
              <h5 className="text-dark text-align-center fs-4 ms-1 mt-2">
               
               Pan de Dios
              </h5>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2 toggler">
            <MdOutlineLegendToggle />
          </NavbarToggler>
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="text-dark">
                  <Link className="link" to="/producto">
                    Producto
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="text-dark">
                  <Link className="link" to="/pedido">
                    pedidos
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="text-dark">
                  <Link className="link" to="/profile">
                    Registrarse
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Admin />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/producto" element={<Producto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Bnavegacion;
