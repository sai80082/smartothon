import {
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Code from "./components/code/Code";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </>

  );
}
export default App;
