import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Appointments from "./pages/Appointments/Appointments";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/logout" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};

export default AppRoutes;
