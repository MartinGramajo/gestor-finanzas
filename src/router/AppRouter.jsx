import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioAgregarScreen from "../pages/FormularioAgregarScreen";
import HomeScreen from "../pages/HomeScreen";
import EditarEliminarScreen from "../pages/EditarEliminarScreen";
import NavReact from "../components/common/NavReact";
import Footer from "../components/common/Footer";

const AppRouter = () => {
  return (
    <section className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <NavReact />
        <Routes>
          <Route path="/agregar" element={<FormularioAgregarScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/acciones" element={<EditarEliminarScreen />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
};

export default AppRouter;
