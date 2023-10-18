import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AreaChart } from "./components";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AreaChart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
