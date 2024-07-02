import { Image } from "react-bootstrap";
import FormAgregar from "../components/FormAgregar";
import gestion from "../assets/gestionForm.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const FormularioAgregarScreen = () => {
  return (
    <section>
      <div>
        <div className="banner-image-container">
          <Image className="banner-image" src={gestion} fluid />
        </div>
        <section className="container">
          <div className="row">
            <h5 className="text-center mb-4">
              <FontAwesomeIcon className="me-2 " icon={faCirclePlus} />
              Agrega una Nueva Gestión de Finanzas
            </h5>
            <article className="text-center col-md-6 col-12 d-flex align-items-center justify-content-center">
              <div>
                <h6>
                  Completa el siguiente formulario para registrar una nueva
                  gestión financiera.
                </h6>
                <h6>
                  Asegúrate de proporcionar toda la información necesaria para
                  un registro preciso y completo.
                </h6>
              </div>
            </article>
            <article className="pb-5 col-md-6 col-12">
              <FormAgregar />
            </article>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FormularioAgregarScreen;
