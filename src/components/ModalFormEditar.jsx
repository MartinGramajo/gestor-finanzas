import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { actualizarProducto } from "../slices/transactionsSlice";

const ModalFormEditar = ({ transaction }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setFormData(transaction);
    setShow(true);
  };

  const [formData, setFormData] = useState(transaction);
  const dispatch = useDispatch();

  useEffect(() => {
    setFormData(transaction);
  }, [transaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEditar = (e) => {
    e.preventDefault();
    console.log(formData);

    dispatch(
      actualizarProducto({
        id: transaction.id,
        productoActualizado: formData,
      })
    );

    setFormData(transaction);
    handleClose();
  };

  return (
    <div>
      <Button className="btn btn-warning mx-2" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-3" onSubmit={handleEditar}>
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
              <label>Fecha</label>
              <input
                type="text"
                className="form-control"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>¿Es gasto o ingreso?</label>
              <input
                type="text"
                className="form-control"
                name="gastoIngreso"
                value={formData.gastoIngreso}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="mt-3 btn btn-primary">
              Modificar
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="mt-3 btn btn-secondary"
            >
              Cancelar
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFormEditar;
