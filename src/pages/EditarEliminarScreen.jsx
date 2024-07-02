import { useSelector } from "react-redux";
import ModalFormEditar from "../components/ModalFormEditar";
import { useDispatch } from "react-redux";
import { eliminarTransaction } from "../slices/transactionsSlice";
import gestion from "../assets/gestionbanner.jpg";
import { Button, Image, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const EditarEliminarScreen = () => {
  const listadoTransacciones = useSelector((state) => state.transaction);
  const dispatch = useDispatch();

  const handleStatus = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(eliminarTransaction({ id }));
        Swal.fire("Eliminado", "La transacción ha sido eliminada", "success");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  };

  return (
    <div>
      <div className="banner-image-container">
        <Image className="banner-image" src={gestion} fluid />
      </div>
      <div>
        <h5 className="text-center mb-4">Panel de Gestión</h5>
      </div>
      <section className="container">
        {listadoTransacciones.length === 0 ? (
          <p className="text-center">No se encontraron registros.</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Monto</th>
                <th>Categorías</th>
                <th>Fecha</th>
                <th>Gasto o Ingreso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listadoTransacciones.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.descripcion}</td>
                  <td>{transaction.monto}</td>
                  <td>{transaction.categorias}</td>
                  <td>{transaction.fecha}</td>
                  <td>{transaction.gastoIngreso}</td>
                  <td className="d-flex">
                    <ModalFormEditar
                      transaction={transaction}
                      id={transaction.id}
                    />
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => handleStatus(transaction.id, "eliminado")}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </section>
    </div>
  );
};

export default EditarEliminarScreen;
