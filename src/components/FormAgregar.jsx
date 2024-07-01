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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const handleAgregar = (e) => {
    e.preventDefault();
    console.log(formData);

    const nuevaTransaction = {
      ...formData,
      id: Math.floor(Math.random() * 1000),
    };

    dispatch(agregarTransaction(nuevaTransaction));

    setFormData(valoresIniciales);
  };

  return (
    <div>
      <h1>Form agregar</h1>
      <form className="p-3 w-50" onSubmit={handleAgregar}>
        <div className="form-group">
          <label>Descripcion</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Monto</label>
          <input
            type="number"
            className="form-control"
            name="monto"
            value={formData.monto}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Categorias</label>
          <input
            type="text"
            className="form-control"
            name="categorias"
            value={formData.categorias}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>fecha</label>
          <input
            type="text"
            className="form-control"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label> si es gasto o ingreso?</label>
          <input
            type="text"
            className="form-control"
            name="gastoIngreso"
            value={formData.gastoIngreso}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="mt-3 btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormAgregar;
