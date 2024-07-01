import { Image } from "react-bootstrap";
import FormAgregar from "../components/FormAgregar";
import gestion from "../assets/gestionForm.jpg";

const FormularioAgregarScreen = () => {
  return (
    <section>
      <div>
        <div className="banner-image-container">
          <Image className="banner-image" src={gestion} fluid />
        </div>
        <div className="text-center">
          <h5 className="text-center mb-4">
            Agrega una Nueva Gestión de Finanzas
          </h5>
          <h6>
            Completa el siguiente formulario para registrar una nueva gestión
            financiera.
          </h6>
          <h6>
            Asegúrate de proporcionar toda la información necesaria para un
            registro preciso y completo.
          </h6>
        </div>
        <div className="container pb-5">
          <FormAgregar />
        </div>
      </div>
    </section>
  );
};

export default FormularioAgregarScreen;
