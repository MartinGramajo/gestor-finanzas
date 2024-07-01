import React, { useState } from "react";
import { Image, Table, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import gestion from "../assets/gestorHome.png";

const HomeScreen = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const listadoTransacciones = useSelector((state) => state.transaction);

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
      <div className="banner-image-container">
        <Image className="banner-image" src={gestion} fluid />
      </div>
      <section className="container">
        <div className="text-center mb-4">
          <h5>Controla tus Finanzas con Facilidad</h5>
          <h6>
            Descubre una nueva forma inteligente de administrar tu dinero con
            nuestra aplicación de gestión de finanzas. Desde presupuestos
            personalizados hasta seguimiento detallado de gastos e ingresos,
            nuestra herramienta te proporciona las herramientas necesarias para
            tomar decisiones financieras informadas y alcanzar tus metas
            económicas. Simplifica tu vida financiera y empieza a planificar tu
            futuro con confianza hoy mismo.
          </h6>
        </div>
        <div>
          <label htmlFor="busqueda">Buscar por categoría:</label>
          <input
            id="busqueda"
            type="text"
            className="ms-2"
            value={textoBusqueda}
            onChange={handleBusquedaChange}
            placeholder="Ingrese categoría"
          />
        </div>
        <div className="mt-4">
          {transaccionesFiltradas.length === 0 ? (
            <Alert variant="info">
              No se encontraron registros para la búsqueda.
            </Alert>
          ) : (
            <Table striped bordered hover>
              <thead>
                <tr>
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
                    <td>{transaction.descripcion}</td>
                    <td>$ {transaction.monto}</td>
                    <td>{transaction.categorias}</td>
                    <td>{transaction.fecha}</td>
                    <td>{transaction.gastoIngreso}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
