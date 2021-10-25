import React from "react";
import { Link } from "react-router-dom";

const Titulo = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
      <Link to="/" className="navbar-brand" href="#">
        <img src="leilao.png" alt="Leilão de Obras de Arte" width="40" className="mr-2"/>
        Leilão de Obras de Arte
      </Link>
    </nav>
  );
};

export default Titulo;
