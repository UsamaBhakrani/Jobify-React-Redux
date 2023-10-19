import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages";
import { AreaChart } from "./components";

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
