import React from "react";
import { useSelector } from "react-redux"; // Importar useSelector de react-redux
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraficoTorta = () => {
  const listadoTransacciones = useSelector((state) => state.transaction); // Obtener listado de transacciones desde Redux

  // Función para calcular el color de cada sección del gráfico
  const getColor = (tipo) => {
    return tipo === "gasto" ? "#FF5733" : "#3399FF"; // Rojo más fuerte para gastos, Azul más fuerte para ingresos
  };

  // Convertir los datos a la estructura necesaria para Recharts
  const dataGastos = listadoTransacciones.map((item) => ({
    monto: Number(item.monto),
    fecha: item.fecha,
    tipo: item.gastoIngreso,
    descripcion: item.descripcion, // Agregamos la descripción (gasto/ingreso)
  }));

  if (dataGastos.length === 0) {
    return <p>Todavía no se han cargado datos para mostrar en tu gráfico.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={dataGastos}
          dataKey="monto"
          nameKey="fecha"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label={({ fecha, tipo, descripcion }) =>
            `${fecha} (${tipo}) - ${descripcion}`
          }
        >
          {dataGastos.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getColor(entry.tipo)} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          formatter={(value, entry) =>
            `${value} - ${entry.payload.descripcion}`
          }
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GraficoTorta;
