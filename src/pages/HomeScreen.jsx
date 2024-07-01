import React, { useState } from "react";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const listadoTransacciones = useSelector((state) => state.transaction);
  console.log("HomeScreen ~ listadoTransacciones:", listadoTransacciones);

  const handleBusquedaChange = (event) => {
    setTextoBusqueda(event.target.value);
  };

  const transaccionesFiltradas = textoBusqueda
    ? listadoTransacciones.filter((transaction) =>
        transaction.categorias
          .toLowerCase()
          .includes(textoBusqueda.toLowerCase())
      )
    : listadoTransacciones;

  return (
    <div>
      <h2>Filtros de Categorías</h2>
      <div>
        <label htmlFor="busqueda">Buscar por categoría:</label>
        <input
          id="busqueda"
          type="text"
          value={textoBusqueda}
          onChange={handleBusquedaChange}
          placeholder="Ingrese categoría"
        />
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Descripcion</th>
              <th>Monto</th>
              <th>Categorias</th>
              <th>Fecha</th>
              <th>Gasto o Ingreso</th>
            </tr>
          </thead>
          <tbody>
            {transaccionesFiltradas.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.descripcion}</td>
                <td>{transaction.monto}</td>
                <td>{transaction.categorias}</td>
                <td>{transaction.fecha}</td>
                <td>{transaction.gastoIngreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeScreen;
