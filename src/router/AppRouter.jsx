import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormularioAgregarScreen from "../pages/FormularioAgregarScreen";
import HomeScreen from "../pages/HomeScreen";
import EditarEliminarScreen from "../pages/EditarEliminarScreen";
import NavReact from "../components/common/NavReact";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavReact />
      <Routes>
        <Route path="/agregar" element={<FormularioAgregarScreen />}></Route>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/acciones" element={<EditarEliminarScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
