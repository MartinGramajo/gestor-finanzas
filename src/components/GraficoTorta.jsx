import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const GraficoTorta = () => {
  const listadoTransacciones = useSelector((state) => state.transaction);
  const getColor = (tipo) => {
    if (tipo === "gasto") {
      return "#FF5733";
    } else if (tipo === "ingreso") {
      return "#32CD32";
    } else {
      return "#3399FF";
    }
  };

  const dataGastos = listadoTransacciones.map((item) => ({
    monto: Number(item.monto),
    fecha: item.fecha,
    tipo: item.gastoIngreso,
    descripcion: item.descripcion,
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
          content={({ payload }) => {
            return (
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {payload.map((entry, index) => (
                  <li key={`item-${index}`} style={{ color: entry.color }}>
                    {`${entry.value} - ${entry.payload.descripcion} (${entry.payload.monto})`}
                  </li>
                ))}
              </ul>
            );
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GraficoTorta;
