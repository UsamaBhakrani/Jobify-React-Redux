import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, DashBoard } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
