import { useState } from "react";
import { useDispatch } from "react-redux";
import { agregarTransaction } from "../slices/transactionsSlice";

const FormAgregar = () => {
  const valoresIniciales = {
    descripcion: "",
    monto: "",
    categorias: "",
    fecha: "",
    gastoIngreso: "",
  };

  const [formData, setFormData] = useState(valoresIniciales);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAgregar = (e) => {
    e.preventDefault();

    const nuevaTransaction = {
      ...formData,
      id: Math.floor(Math.random() * 1000),
    };

    dispatch(agregarTransaction(nuevaTransaction));
    setFormData(valoresIniciales);
  };

  return (
    <div className="mt-4">
      <section>
        <form className="card-glass " onSubmit={handleAgregar}>
          <div className="form-group py-2">
            <label className="user-box" htmlFor="descripcion">
              Descripción
            </label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group py-2">
            <label className="user-box" htmlFor="monto">
              Monto
            </label>
            <input
              type="number"
              className="form-control"
              id="monto"
              name="monto"
              value={formData.monto}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group py-2">
            <label className="user-box" htmlFor="categorias">
              Categorías
            </label>
            <input
              type="text"
              className="form-control"
              id="categorias"
              name="categorias"
              value={formData.categorias}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group py-2">
            <label className="user-box" htmlFor="fecha">
              Fecha
            </label>
            <input
              type="date"
              className="form-control"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group py-2">
            <label className="user-box" htmlFor="gastoIngreso">
              Tipo de Transacción (Gasto/Ingreso)
            </label>
            <select
              className="form-control"
              id="gastoIngreso"
              name="gastoIngreso"
              value={formData.gastoIngreso}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar...</option>
              <option value="gasto">Gasto</option>
              <option value="ingreso">Ingreso</option>
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success py-2 mt-2">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormAgregar;
