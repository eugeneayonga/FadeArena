import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Appointments from "./pages/Appointments/Appointments";
import Login from "./pages/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/login" element={<Login />}></Route>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};

export default AppRoutes;
