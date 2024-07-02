import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="text-center mt-auto py-4 bg-black text-white">
      <h6 className="fs-12">
        <FontAwesomeIcon className="me-2" icon={faCode} /> Rolling Code School ©
        2024 Todos los derechos reservados
      </h6>
    </div>
  );
};

export default Footer;
