import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Error, Register, DashBoard } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
