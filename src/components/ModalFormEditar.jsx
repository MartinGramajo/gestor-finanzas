import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { actualizarProducto } from "../slices/transactionsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

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

    dispatch(
      actualizarProducto({
        id: transaction.id,
        productoActualizado: formData,
      })
    );
    Swal.fire({
      title: "¡Éxito!",
      text: "La transacción ha sido modificada exitosamente.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Aceptar",
    }).then((result) => {
      if (result.isConfirmed) {
        handleClose();
      }
    });
  };

  return (
    <div>
      <Button className="btn btn-warning mx-2" onClick={handleShow}>
        <FontAwesomeIcon icon={faEdit} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon className="me-4" icon={faEdit} />
            Editar
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-3" onSubmit={handleEditar}>
            <div className="form-group py-2">
              <label htmlFor="descripcion">Descripción</label>
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
              <label htmlFor="monto">Monto</label>
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
              <label htmlFor="categorias">Categorías</label>
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
              <label htmlFor="fecha">Fecha</label>
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
              <label htmlFor="gastoIngreso">
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
              <div className="mx-2">
                <button type="submit" className="btn btn-success py-2 mt-2">
                  Modificar
                </button>
              </div>
              <div className="mx-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-primary py-2 mt-2 ml-2"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalFormEditar;
