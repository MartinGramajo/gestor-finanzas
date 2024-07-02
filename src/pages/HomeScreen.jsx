import { useState } from "react";
import { Image, Table, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import gestion from "../assets/gestorHome.png";
import GraficoTorta from "../components/GraficoTorta";

const HomeScreen = () => {
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const listadoTransacciones = useSelector((state) => state.transaction);
  console.log("HomeScreen ~ listadoTransacciones :", listadoTransacciones);

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

  const calcularBalanceTotalIngresos = () => {
    let totalIngresos = 0;

    listadoTransacciones.forEach((transaction) => {
      if (transaction.gastoIngreso === "ingreso") {
        totalIngresos += Number(transaction.monto);
      }
    });

    return totalIngresos;
  };

  const calcularBalanceTotalGastos = () => {
    let totalGastos = 0;

    listadoTransacciones.forEach((transaction) => {
      if (transaction.gastoIngreso === "gasto") {
        totalGastos += Number(transaction.monto);
      }
    });

    return totalGastos;
  };

  const balanceTotalIngresos = calcularBalanceTotalIngresos();
  const balanceTotalGastos = calcularBalanceTotalGastos();
  const balanceTotal = balanceTotalIngresos - balanceTotalGastos;

  const balanceClass = balanceTotal < 0 ? "text-danger" : "text-success";

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
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th className="fs-14-12">Descripción </th>
                  <th className="fs-14-12">Monto ingresado</th>
                  <th className="fs-14-12">Categoría</th>
                  <th className="fs-14-12">Fecha</th>
                  <th className="fs-14-12">Gasto/Ingreso</th>
                </tr>
              </thead>
              <tbody>
                {transaccionesFiltradas.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="fs-14-12">{transaction.descripcion}</td>
                    <td className="fs-14-12">$ {transaction.monto}</td>
                    <td className="fs-14-12">{transaction.categorias}</td>
                    <td className="fs-14-12">{transaction.fecha}</td>
                    <td className="fs-14-12">{transaction.gastoIngreso}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </section>
      <section className="container pb-5">
        <h5 className="text-center mt-4">Gráfico de tus finanzas</h5>
        <GraficoTorta />
      </section>
      <section className="container pb-4">
        <div>
          <h4 className="text-center">Balance Total</h4>
          <h5 className="text-success">
            Total de Ingresos: $ {balanceTotalIngresos}
          </h5>
          <h5 className="text-danger">
            Total de Gastos: $ {balanceTotalGastos}
          </h5>
          <h5 className={balanceClass}>Balance Total: $ {balanceTotal}</h5>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
